/* eslint-disable react/prop-types */
import { CiCamera, IoClipboardOutline } from "../icons/icons";
import handleCaptureClick from "../utilities/ScreenShot";
import handleCopyClick from "../utilities/copyText";
function CopyCapture({ hadith, captuerRef }) {
  return (
    <div className=" relative gap-4 top-0 flex ">
        <button className="text-3xl" onClick={() => handleCopyClick(hadith)}>
          <IoClipboardOutline />
        </button>
        <button
          className="text-4xl"
          onClick={() => handleCaptureClick(captuerRef)}
        >
          <CiCamera />
        </button>
      </div>
  )
}

export default CopyCapture