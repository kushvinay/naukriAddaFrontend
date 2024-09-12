

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynAddEducation } from "@/Store/Actions/StudentActions";

const AddGraduation = ({ isVisible, onClose }) => {
  const [college, setCollege] = useState("");
  const [endyear, setEndyear] = useState("");
  const [startyear, setStartyear] = useState("");
  const [degree, setDegree] = useState("");
  const [performance, setPerformance] = useState("");
  const [Stream, setStream] = useState("");
  const dispatch = useDispatch();

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e?.target?.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const education = {
      college,
      endyear,
      startyear,
      degree,
      performance,
      Stream,
      type: "Graduation",
    };
    dispatch(asynAddEducation(education));
    onClose();
  };

  return (
    <div
      className="fixed  inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white relative w-full mt-2 max-w-sm md:max-w-md lg:max-w-2xl mx-4 md:mx-auto p-5 rounded-lg shadow-lg max-h-screen overflow-auto">
        <button
          className="text-2xl absolute top-3 right-3 text-gray-700 hover:text-red-500"
          onClick={() => onClose()}
        >
          X
        </button>
        <form
          className="flex flex-col items-center"
          action=""
          method="Post"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-5">Graduation/Post Graduation</h1>
          <label className="flex flex-col w-full mb-4">
            College
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="college"
              value={college}
              placeholder="Ex: XYZ College"
              onChange={(e) => setCollege(e?.target?.value)}
            />
          </label>
          <label className="flex flex-col w-full mb-4">
            Starting Year
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="date"
              name="startyear"
              value={startyear}
              onChange={(e) => setStartyear(e?.target?.value)}
            />
          </label>
          <label className="flex flex-col w-full mb-4">
            End Year
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="date"
              name="endyear"
              value={endyear}
              onChange={(e) => setEndyear(e?.target?.value)}
            />
          </label>
          <label className="flex flex-col w-full mb-4">
            Degree
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="degree"
              value={degree}
              placeholder="Ex: BE"
              onChange={(e) => setDegree(e?.target?.value)}
            />
          </label>
          <label className="flex flex-col w-full mb-4">
            Stream
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="stream"
              value={Stream}
              placeholder="Ex: Computer Science"
              onChange={(e) => setStream(e?.target?.value)}
            />
          </label>
          <label className="flex flex-col w-full mb-4">
            Performance
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="performance"
              value={performance}
              placeholder="Percentage Ex: 75%"
              onChange={(e) => setPerformance(e?.target?.value)}
            />
          </label>
          <button className="py-3 px-5 mt-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddGraduation;
