/* eslint-disable react/prop-types */
import Select from "./Select";

function Content({ book, setBook, books, animationHadith, hadith }) {
  return (
    <main>
      {" "}
      <Select options={books} value={book} setValue={setBook} />
      <div
        className={`relative p-4 sm:leading-normal text-3xl sm:text-5xl w-full h-64 max-h-72 overflow-y-auto ${animationHadith}`}
      >
        <p>{hadith}</p>
      </div>    
    </main>
  );
}

export default Content;
