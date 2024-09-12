
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynAddEducation } from "@/Store/Actions/StudentActions";

const AddSenSecEdu = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [endyear, setendyear] = useState("");
  const [board, setboard] = useState("");
  const [performance, setperformance] = useState("");
  const [school, setschool] = useState("");
  const [Stream, setStream] = useState("");

  if (!isVisible) return null;

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const hendelSubmit = (e) => {
    e.preventDefault();
    const education = {
      endyear,
      board,
      performance,
      school,
      Stream,
      type: "Seneducation",
    };
    dispatch(asynAddEducation(education));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="wrapper"
      onClick={henderclose}
    >
      <div className="bg-white relative w-full max-w-xs md:max-w-lg lg:max-w-2xl mx-4 p-6 rounded-lg shadow-lg max-h-screen overflow-auto">
        <button
          className="text-2xl absolute top-2 right-2 focus:outline-none"
          onClick={() => onClose()}
        >
          X
        </button>
        <form
          className="flex flex-col items-center"
          action=""
          method="Post"
          onSubmit={hendelSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-6">Senior Secondary (10+2) Education</h1>
          <label className="flex flex-col w-full">
            Passing Year
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="endyear"
              value={endyear}
              placeholder="Ex: 2016"
              onChange={(e) => setendyear(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full">
            Board
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="board"
              value={board}
              placeholder="Ex: MP Board"
              onChange={(e) => setboard(e.target.value)}
            />
          </label>
          <label className="flex flex-col w-full">
            <div className="flex justify-between">
              Performance <span className="text-sm text-gray-600">(in Percentage%)</span>
            </div>
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="performance"
              value={performance}
              onChange={(e) => setperformance(e.target.value)}
              placeholder="Ex: 75%"
            />
          </label>
          <label className="flex flex-col w-full">
            Stream
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="Stream"
              value={Stream}
              onChange={(e) => setStream(e.target.value)}
              placeholder="Ex: Science/Commerce"
            />
          </label>
          <label className="flex flex-col w-full">
            School
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="school"
              value={school}
              onChange={(e) => setschool(e.target.value)}
              placeholder="Ex: XYZ School"
            />
          </label>
          <button className="py-3 px-5 bg-blue-500 text-white rounded mt-6 w-full max-w-sm">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSenSecEdu;
