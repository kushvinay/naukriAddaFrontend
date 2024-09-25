
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const StudentResume = () => {
  const [showButton, setShowButton] = useState(
    typeof window !== "undefined" && window.innerWidth > 880
  );
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false); 
  const resumeRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setShowButton(typeof window !== "undefined" && window.innerWidth > 880);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const downloadPDF = () => {
    if (typeof window === "undefined" || !resumeRef.current) return;
    setIsGeneratingPDF(true);

    const pdf = new jsPDF("p", "mm", "a4");
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pageWidth = pdf.internal.pageSize.getWidth();
    let position = 0;

    html2canvas(resumeRef.current, {
      scale: window.devicePixelRatio,
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let imgData = canvas.toDataURL("image/png");

      // Add the first page
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if needed
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("resume.pdf");
      setIsGeneratingPDF(false);
    });
  };

  const { student } = useSelector((state) => state.StudentSlice);

  const graedu = student?.resume?.education?.filter(
    (edu) => edu.type === "Graduation"
  );
  const senedu = student?.resume?.education?.filter(
    (edu) => edu.type === "Seneducation"
  );
  const higedu = student?.resume?.education?.filter(
    (edu) => edu.type === "Higher"
  );

  return (
    <div className="max-w-[900px] m-auto px-4 sm:px-6 lg:px-8" ref={resumeRef}>
      <h1 className="text-3xl text-center py-5 font-medium text-gray-700 mb-11">
        Resume
      </h1>

      {/* Header Section */}
      <div className="w-full h-auto border-[1px] border-inherit px-4 sm:px-8 py-7 flex flex-col sm:flex-row justify-between items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-semibold pb-1">{student?.fullname}</h3>
          <h4 className="text-gray-500 text-sm pb-1">{student?.email}</h4>
          <h4 className="text-gray-500 text-sm pb-1">+91-{student?.contact}</h4>
        </div>
        {student.avatar?.url && (
          <div className="mt-4 sm:mt-0">
            <Image
              src={student.avatar.url}
              alt={`${student.fullname}'s avatar`}
              height={100}
              width={100}
              className="rounded-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Education Section */}
      <div className="w-full border-[1px] border-inherit px-5 py-7">
        <h4 className="text-gray-500 text-lg mb-4">
          EDUCATION
        </h4>
        <div className="space-y-4">
          {graedu.length > 0 && (
            <div>
              {graedu.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-sm font-semibold">Graduation</h4>
                  <h5 className="text-sm text-gray-500">{edu.college}</h5>
                  <h5 className="text-sm text-gray-500">{edu.degree} in {edu.Stream}</h5>
                  <h5 className="text-sm text-gray-500">{edu.startyear} - {edu.endyear}</h5>
                  <h5 className="text-sm text-gray-500">Percentage: {edu.performance}</h5>
                </div>
              ))}
            </div>
          )}

          {senedu.length > 0 && (
            <div>
              {senedu.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-sm font-semibold">
                    Higher Secondary Education (XII)
                  </h4>
                  <h5 className="text-sm text-gray-500" >{edu.school}</h5>
                  <h5 className="text-sm text-gray-500">{edu.Stream}</h5>
                  <h5 className="text-sm text-gray-500">{edu.board}</h5>
                  <h5 className="text-sm text-gray-500">{edu.endyear}</h5>
                  <h5 className="text-sm text-gray-500">Percentage: {edu.performance}</h5>
                </div>
              ))}
            </div>
          )}

          {higedu.length > 0 && (
            <div>
              {higedu.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h4 className="text-sm font-semibold">High School Education (X)</h4>
                  <h5 className="text-sm text-gray-500">{edu.school}</h5>
                  <h5 className="text-sm text-gray-500">{edu.Stream}</h5>
                  <h5 className="text-sm text-gray-500">{edu.board}</h5>
                  <h5 className="text-sm text-gray-500">{edu.endyear}</h5>
                  <h5 className="text-sm text-gray-500">Percentage: {edu.performance}</h5>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Experience Section */}
      {student?.resume?.jobs?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-5 py-7">
          <h4 className="text-gray-500  text-lg mb-4">
            EXPERIENCE
          </h4>
          <div className="text-sm text-black">
            {student.resume.jobs.map((job, index) => (
              <div key={index} className="mb-4">
                <h3>{job.organization} as {job.profile}</h3>
                <h4>{job.location}</h4>
                <h4>{job.startdate} - {job.enddate}</h4>
                <p>{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}


      {/* Internships Section */}
      {student?.resume?.internships?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-5 py-7">
          <h4 className=" text-gray-500 text-lg mb-4 ">INTERNSHIPS</h4>
          <div className="text-sm text-black">
            {student.resume.internships.map((internship, index) => (
              <div key={index}>
                <h3>{internship.organization} as {internship.profile}</h3>
                <h4>{internship.location}</h4>
                <h4>{internship.startdate} - {internship.enddate}</h4>
                <p>{internship.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Position of Responsibility Section */}
      {student?.resume?.responsibilities?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-5  py-7">
          <h4 className=" text-gray-500 text-lg mb-4 ">
            POSITIONS OF RESPONSIBILITY
          </h4>
          <div className="text-sm text-black">
            {student.resume.responsibilities.map((responsibility, index) => (
              <div key={index}>
                <p>{responsibility.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Training/Courses Section */}
      {student?.resume?.courses?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-5 py-7">
          <h4 className=" text-gray-500 text-lg mb-4">TRAINING</h4>
          <div className="text-sm text-black">
            {student.resume.courses.map((course, index) => (
              <div key={index}>
                <h3>{course.training}</h3>
                <h4>{course.organization}</h4>
                <h4>{course.location}</h4>
                <h4>{course.startDate} - {course.endDate}</h4>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects Section */}
      {student?.resume?.projects?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-5  py-7 ">
          <h4 className=" text-gray-500 text-lg mb-4">PROJECTS</h4>
          <div className="text-sm text-black">
            {student.resume.projects.map((project, index) => (
              <div key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.url && <a href={project.url} className="text-blue-500">{project.url}</a>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills Section */}
      {student?.resume?.skills?.length > 0 && (
        <div className="w-full  border-[1px] border-inherit px-5  py-7">
          <h4 className=" text-gray-500 text-lg mb-4 ">SKILLS</h4>
          <ul className="text-sm text-black">
            {student.resume.skills.map(({ skill, level, id }) => (
              <li key={id}>
                <strong>{skill}</strong> - {level}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Accomplishments Section */}
      {student?.resume?.accomplishments?.length > 0 && (
        <div className="w-full border-[1px] border-inherit px-4 py-7">
          <h4 className="text-gray-500 text-lg mb-4 ">ADDITIONAL INFORMATION</h4>
          <ul className="text-sm text-black">
            {student.resume.accomplishments.map(({ description, id }) => (
              <li key={id}>{description}</li>
            ))}
          </ul>
        </div>
      )}


      {/* Download Button */}
      <div className="w-full flex justify-center items-center mt-6">
        {!isGeneratingPDF && showButton && (
        <div className="w-full flex justify-center items-center mt-6">
          <button
            onClick={downloadPDF}
            className="p-3 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Download Resume
          </button>
        </div>
      )}
      </div>

    </div>
  );
};

export default StudentResume;
