import { useState, useRef } from "react";
import HeaderLeft from "../Components/Resume/HeaderLeft";
import Home from "../Components/Resume/Home";
import html2pdf from "html2pdf.js";
import { BiDownload } from "react-icons/bi";

const Resume = () => {
  const [darkMode, setDarkMode] = useState(false);
  const resumeRef = useRef();
  const downloadButtonRef = useRef(); // Create a ref for the download button

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const downloadResume = () => {
    const element = resumeRef.current;
    const downloadButton = downloadButtonRef.current;
    
    // Hide the download button
    downloadButton.style.display = "none";

    const opt = {
      margin: 0,
      filename: "Bibek_Bhandari_Resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(opt).save().finally(() => {
      // Show the download button again after PDF is generated
      downloadButton.style.display = "block";
    });
  };

  return (
    <>
      <div
        className={`resume min-h-screen w-full flex flex-col sm:flex-row subpixel-antialiased ${
          darkMode ? "bg-black" : "bg-white"
        }`}
        ref={resumeRef}
      >
        {/* Download Button */}
        <div
          className="fixed right-10 bottom-5 p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-all duration-300 ease-in-out"
          ref={downloadButtonRef}
        >
          <button onClick={downloadResume}>
            <BiDownload className="text-2xl" />
          </button>
        </div>

        {/* Resume Content */}
        <HeaderLeft darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home />
      </div>
    </>
  );
};

export default Resume;
