import html2canvas from "html2canvas";

const handleCaptureClick = (captureRef) => {
  const element = captureRef.current;

  html2canvas(element).then((canvas) => {
    const screenshot = canvas.toDataURL("image/png");

    // Create a link to download the image
    const link = document.createElement("a");
    link.href = screenshot;
    link.download = "Sahih.png";
    link.click();
  });
};
export default handleCaptureClick;
