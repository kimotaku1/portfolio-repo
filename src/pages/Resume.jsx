import { useState, useRef } from "react";
import HeaderLeft from "../Components/Resume/HeaderLeft";
import Home from "../Components/Resume/Home";
import html2pdf from "html2pdf.js";
import { BiDownload } from "react-icons/bi";

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false); // New state for download status
  const resumeRef = useRef();
  const downloadButtonRef = useRef();

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const downloadResume = () => {
    console.log("Download button clicked"); // Debugging line
    const element = resumeRef.current;
    const downloadButton = downloadButtonRef.current;

    // Set downloading state to true
    setIsDownloading(true);
    downloadButton.style.display = "none";

    const opt = {
      margin: 0,
      filename: "Bibek_Bhandari_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .finally(() => {
        // Reset state after download
        setIsDownloading(false);
        downloadButton.style.display = "block";
      });
  };

  return (
    <>
      <div
        className={`resume min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${darkMode ? "bg-black" : "bg-white"}`}
        ref={resumeRef}
      >
        {/* Download Button */}
        <button
          className="fixed right-10 bottom-5 p-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out border-solid border-red-300"
          onClick={downloadResume}
          ref={downloadButtonRef}
          style={{ touchAction: 'manipulation', zIndex: 10 }}
        >
          <BiDownload className="text-2xl" />
        </button>

        {/* Resume Content */}
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} isDownloading={isDownloading} />
        <Home />
      </div>
    </>
  );
};

export default Resume;
