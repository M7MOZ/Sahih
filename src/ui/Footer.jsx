/* eslint-disable react/prop-types */
import { FaArrowRight } from "../icons/icons";
import getLabelByValue from "../utilities/getLabelByValue";
function Footer({ bookSlug, chapter, handleNewHadith }) {
  return (
    <div className="relative w-full text-3xl sm:lg:text-5xl flex items-center justify-between mt-4">
        <div>
          <p>{getLabelByValue(bookSlug)}</p>
          <p>{chapter}</p> 
        </div>
        <button
          onClick={handleNewHadith}
          className="relative flex items-center"
        >
          <FaArrowRight className="text-2xl ml-3" />
          <span>حديث جديد</span>
        </button>
      </div>
  )
}

export default Footer