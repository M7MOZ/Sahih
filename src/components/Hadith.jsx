import { useEffect, useRef, useState } from "react";
import { useHadith } from "../queries/useHadith";
import { usePhoto } from "../queries/usePhoto";
import books from "../utilities/books";
import Select from "../ui/Select";
import Spinner from "../ui/Spinner";
import Error from "../ui/Error";
import Footer from "../ui/footer";
import CopyCapture from "../ui/CopyCapture";
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

  useEffect(() => {
    if (hadith) {
      setAnimationHadith("fade-in-up"); // Trigger animation
      setAnimationPhoto("fade-in"); // Trigger animation
      const timer = setTimeout(() => {
        setAnimationHadith(""), setAnimationPhoto("");
      }, 1000); // Remove animation class after 1s
      return () => clearTimeout(timer);
    }
  }, [hadith]);

  if (isHadithLoading || isPhotoLoading) return <Spinner />;
  if (isHadithError || isPhotoError)
    return <Error error={hadithError || photoError} />;

  const handleNewHadith = () => {
    refetchHadith();
    refetchPhoto();
  };

  return (
    <div
      className={`relative h-screen text-white p-24 bg-cover bg-center bg-slate-600 flex items-center justify-center flex-col ${animationPhoto}`}
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
      <Select options={books} value={book} setValue={setBook} />
      <p
        className={`relative leading-loose text-5xl w-full  overflow-y-auto max-h-96 ${animationHadith}`}
      >
        {hadith}
      </p>
      {/* Hadith info and next button */}
      <Footer
        handleNewHadith={handleNewHadith}
        bookSlug={bookSlug}
        chapter={chapter}
      />
    </div>
  );
}
