

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynAddEducation } from "@/Store/Actions/StudentActions";

const AddSecEdu = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [endyear, setendyear] = useState("");
  const [board, setboard] = useState("");
  const [performance, setperformance] = useState("");
  const [school, setschool] = useState("");

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
      type: "Higher",
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
          className="text-2xl absolute top-3 right-3 text-gray-700 hover:text-red-500"
          onClick={() => onClose()}
        >
          X
        </button>

        <form
          className="flex flex-col items-center justify-center"
          action=""
          method="Post"
          onSubmit={hendelSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-5">
            High School (X) Education
          </h1>

          <label className="flex flex-col w-full mb-4">
            Passing Year
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="text"
              name="endyear"
              value={endyear}
              placeholder="Ex: 2016"
              onChange={(e) => setendyear(e?.target?.value)}
              required
            />
          </label>

          <label className="flex flex-col w-full mb-4">
            Board
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="text"
              name="board"
              value={board}
              placeholder="Ex: MP Board"
              onChange={(e) => setboard(e?.target?.value)}
              required
            />
          </label>

          <label className="flex flex-col w-full mb-4">
            Performance <span className="text-sm text-gray-600">(in Percentage%)</span>
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="text"
              name="performance"
              value={performance}
              placeholder="Ex: 75%"
              onChange={(e) => setperformance(e?.target?.value)}
              required
            />
          </label>

          <label className="flex flex-col w-full mb-4">
            School
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="text"
              name="school"
              value={school}
              placeholder="Ex: XYZ School"
              onChange={(e) => setschool(e?.target?.value)}
              required
            />
          </label>

          <button className="py-3 px-5 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full md:w-auto">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSecEdu;
