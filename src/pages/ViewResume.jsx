import React, { useEffect, useState } from "react";
import { FaFileDownload, FaHistory, FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Preview from "../components/Preview";
import Edit from "../components/Edit";
import {downloadResumeAPI, getResumeAPI } from "../services/allResumeApiService";
import jspdf from "jspdf";
import html2canvas from "html2canvas";

function ViewResume() {
  const { id } = useParams();
  console.log(id);

  const [resumeData, setResumeData] = useState({});
  console.log(resumeData);
  const previewRef = useRef()

  useEffect(() => {
    getResumeDetails();
  }, []);

  const getResumeDetails = async () => {
    if (id) {
      const result = await getResumeAPI(id);
      setResumeData(result.data);
    }
  };

  const downloadResume = async()=>{
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag, {
      scale:1
    })
    const imgData = canvas.toDataURL("image/jpeg", 0.7)
    generatePDF(imgData)
    // canvas.toBlob(blob=>{
    //   const shortURL = URL.createObjectURL(blob)
    //   generatePDF(shortURL)
    // })
  }


  const generatePDF = async(resumeImg)=>{
    //get time of download
    const today = new Date()
    //console.log(today);
    const timeStamp = `${today.toLocaleDateString()}, ${today.toLocaleDateString()}`
    //create PDF object
    //const previewTag =previewRef.current
    //const canvas = html2canvas(previewTag)
    //const resumeImg = canvas.toDataURL("image/jpeg")
    
     //console.log(downloadDetails);
     
     //create PDF object
     const pdf = new jspdf()
     const imgWidth = pdf.internal.pageSize.getWidth()
     const imgHeight = pdf.internal.pageSize.getHeight()
     pdf.addImage(resumeImg, 'JPEG',0,0, imgWidth, imgHeight)
    const downloadDetails = {
      timeStamp, resumeId:id,resumeImg
      
    }
  //api call
  const result = await downloadResumeAPI(downloadDetails)
  console.log(result);
  if(result.status==201){
    alert("Resume Downloaded Successfully")
  }
  }
  

  return (
    <div className="container">
      <div className="row my-2">

        <div className="col-lg-2"></div>

        <div className="col-lg-8">

          {/* set icons */}
          <div className="d-flex justify-content-center align-items-center">

            {/* download */}
            <button onClick={downloadResume} className="btn text-primary fs-2 me-2">
              <FaFileDownload />
            </button>

            {/* edit */}
            <Edit resumeData={resumeData} setResumeData = {setResume} />

            {/* history */}
            <Link to={"/downloads"} className="btn text-danger fs-2 me-2">
            {" "}
              <FaHistory />
            </Link>

            {/* back */}
            <Link to={"/form"} className="btn text-success fs-2 me-2">
              <FaBackward />
            </Link>

          </div>

          <div ref={previewRef} className="mt-5">
            <Preview resumeData={resumeData} />
          </div>

        </div>

        <div className="col-lg-2"></div>

      </div>
    </div>
  );
}

export default ViewResume;