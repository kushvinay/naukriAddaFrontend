

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddprojectsRes } from "@/Store/Actions/StudentActions";

const Addprojects = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [url, seturl] = useState("");

  if (!isVisible) return null;

  const henderclose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const hendelSubmit = (e) => {
    e.preventDefault();
    const project = {
      title,
      description,
      url,
    };
    dispatch(asynaddprojectsRes(project));
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
            Projects
          </h1>

          <label className="flex flex-col w-full">
            Project title
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="text"
              name="title"
              value={title}
              placeholder="Ex: Amazon"
              onChange={(e) => settitle(e?.target?.value)}
              required
            />
          </label>

          <label className="flex flex-col w-full">
            Project link
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
              type="url"
              name="url"
              value={url}
              placeholder="Ex: www.amazon.com"
              onChange={(e) => seturl(e?.target?.value)}
            />
          </label>

          <label className="flex flex-col w-full text-xl mb-2">
            Description
          </label>

          <textarea
            className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none my-2 rounded-lg"
            placeholder="Short description of project and its workings (max 250 words)"
            name="description"
            value={description}
            rows="6"
            onChange={(e) => setdescription(e?.target?.value)}
          ></textarea>

          <button className="py-3 px-5 mt-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full md:w-auto">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addprojects;
