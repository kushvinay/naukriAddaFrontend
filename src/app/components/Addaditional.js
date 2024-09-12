

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddaccomplishmentsRes } from "@/Store/Actions/StudentActions";

const AddAdditional = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e?.target?.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const position = {
      description,
    };
    dispatch(asynaddaccomplishmentsRes(position));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-4 sm:mx-6 lg:mx-auto p-6 rounded-lg shadow-lg">
        <button
          className="text-2xl absolute top-4 right-4 focus:outline-none"
          onClick={onClose}
        >
          X
        </button>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-6">
            Additional Details
          </h1>
          <label className="flex flex-col text-sm text-gray-500 text-center mb-4 w-full">
            Add details such as rewards, test scores, certifications, seminars,
            workshops, or interests and hobbies you have pursued.
          </label>
          <textarea
            className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 placeholder-gray-500 focus:outline-none rounded-xl mb-4"
            placeholder="Short description of work done (max 250 words)"
            name="description"
            value={description}
            rows="6"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className="py-3 px-5 w-full max-w-xs bg-blue-500 text-white rounded-lg">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdditional;
