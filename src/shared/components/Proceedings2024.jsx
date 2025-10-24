import React, { useState, useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Link, useLocation } from "react-router-dom";

function Proceedings2024() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pdfUrl = "/assets/documents/ictdif-2024.pdf";
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const location = useLocation()

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(pdfUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load PDF file");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [pdfUrl]);

  return (
    <div >
      
      <div className={`max-w-[1450px] mx-auto h-screen  lg:px-4 py-4 px-0 ${location.pathname === "" ? "" : ""}` }>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              Loading...
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full text-red-500">
              {error}
            </div>
          ) : (
            <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
          )}
        </Worker>
      </div>
    </div>
  );
}

export default Proceedings2024;