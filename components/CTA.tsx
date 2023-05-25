import React from "react";
import useDownloader from "react-use-downloader";

const Cta = () => {
  const { download } = useDownloader();

  const fileUrl = "/CV.pdf";
  const filename = "cv.pdf";
  return (
    <div>
      <button className="btn mr-2" onClick={() => download(fileUrl, filename)}>
        Downland CV
      </button>
      <a className="btn btn-primary " href="#contacts">
        Let's Talk
      </a>
    </div>
  );
};

export default Cta;
