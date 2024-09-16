/* eslint-disable react/prop-types */
import { FaArrowRight } from "../icons/icons";
import getLabelByValue from "../utilities/getLabelByValue";
function Footer({ bookSlug, chapter, handleNewHadith }) {
  return (
    <div className="relative w-full text-4xl flex items-center justify-between mt-4">
        <p>
          ({getLabelByValue(bookSlug)}, {chapter})
        </p>
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