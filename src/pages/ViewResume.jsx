import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
import Preview from "../components/Preview";

function ViewResume() {
  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* set icons */}
          {/* download */}
          <div className="d-flex justify-content-center align-items-center">
            <button className="btn text-primary fs-2 me-2">
              <FaFileDownload />
            </button>
            {/* Edit */}
            edit
            {/* History */}
            <Link to={"/downloads"} className="btn text-danger fs-2 me-2">
              {" "}
              <FaHistory />
            </Link>
            {/* back */}
            <Link to={"/form"} className="btn text-success fs-2 me-2">
              {" "}
              <FaBackward />
            </Link>
          </div>
          <div className="mt-5"> <Preview /> </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default ViewResume;