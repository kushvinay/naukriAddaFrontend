

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddresponsibilitiesRes } from "@/Store/Actions/StudentActions";

const Addposition = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [description, setdescription] = useState("");

  if (!isVisible) return null;

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const hendelSubmit = (e) => {
    e.preventDefault();
    const position = {
      description,
    };
    dispatch(asynaddresponsibilitiesRes(position));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="wrapper"
      onClick={henderclose}
    >
      <div className="bg-white relative w-full max-w-xs md:max-w-lg lg:max-w-2xl mx-4 md:mx-auto p-6 rounded-lg shadow-lg max-h-screen overflow-auto">
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
          onSubmit={hendelSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-5">
            Position of Responsibility
          </h1>

          <label className="flex flex-col w-full text-xl mb-2">
            Description
            <span className="text-sm text-gray-500 my-2">
              If you have been an active part of societies, conducted any events
              or led a team, add details here.
            </span>
          </label>

          <textarea
            className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-xl"
            placeholder="Short description of work done (max 250 words)"
            name="description"
            value={description}
            rows="8"
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>

          <button className="py-3 px-5 mt-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full md:w-auto">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addposition;
