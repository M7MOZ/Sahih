import { useRef, useState } from "react";
import { useHadith } from "../queries/useHadith";
import { usePhoto } from "../queries/usePhoto";
import books from "../utilities/books";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import Footer from "../ui/footer";
import CopyCapture from "../ui/CopyCapture";
import Content from "../ui/Content";
export default function Hadith() {
  const [animationHadith, setAnimationHadith] = useState("");
  const [animationPhoto, setAnimationPhoto] = useState("");
  const captuerRef = useRef();
  const [book, setBook] = useState({
    label: "صحيح البخاري",
    value: "sahih-bukhari",
  });

  const {
    data: hadiths,
    isPending: isHadithLoading,
    error: hadithError,
    isError: isHadithError,
    refetch: refetchHadith,
  } = useHadith(book?.value);

  const {
    data: photo,
    isPending: isPhotoLoading,
    error: photoError,
    isError: isPhotoError,
    refetch: refetchPhoto,
  } = usePhoto();

  const chapter = hadiths?.data.hadiths.data[0].chapter.chapterArabic;
  const bookSlug = hadiths?.data.hadiths.data[0].bookSlug;

  const backgroundImage = photo?.data.urls.regular;
  const hadith = hadiths?.data.hadiths.data[0].hadithArabic;

  if (isHadithLoading || isPhotoLoading) return <Spinner />;
  if (isHadithError || isPhotoError) return <Error error={hadithError || photoError} />;

  const handleNewHadith = () => {
    setAnimationHadith("fade-in-up");
    setAnimationPhoto("fade-in");

    // Clear the animations after 1 second to reset
    setTimeout(() => {
      setAnimationHadith("");
      setAnimationPhoto("");
    }, 1000);
    
    refetchHadith();

    refetchPhoto();
  };

  return (
    <div
      className={`relative h-screen text-white px-10 py-20 sm:px-24 bg-cover bg-center bg-slate-600 grid items-center ${animationPhoto}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      ref={captuerRef}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      {/* copy and captuer buttons*/}
      <CopyCapture hadith={hadith} captuerRef={captuerRef} />
      {/* Select book*/}
      <Content
        book={book}
        setBook={setBook}
        books={books}
        animationHadith={animationHadith}
        hadith={hadith}
      />
      {/* Hadith info and next button */}
      <Footer
        handleNewHadith={handleNewHadith}
        bookSlug={bookSlug}
        chapter={chapter}
      />
    </div>
  );
}
