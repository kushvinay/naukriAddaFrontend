

"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddskillsRes } from "@/Store/Actions/StudentActions";

const AddSkill = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const skills = {
      skill,
      level,
    };
    dispatch(asynaddskillsRes(skills));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white relative w-full max-w-md sm:max-w-lg lg:max-w-xl mx-4 sm:mx-6 lg:mx-auto mt-16 rounded-lg shadow-lg p-8">
        <button
          className="text-2xl absolute top-2 right-2 focus:outline-none"
          onClick={() => onClose()}
        >
          X
        </button>

        <form
          className="flex flex-col items-center justify-center"
          action=""
          method="Post"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-6">Skills</h1>

          <label className="flex flex-col w-full">
            Skills
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
              type="text"
              name="skill"
              value={skill}
              placeholder="Ex: Amazon Web Services"
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </label>

          {skill && (
            <label className="flex flex-col w-full mt-3">
              How would you rate yourself on this skill?
              <select
                className="w-full bg-white text-gray-800 border text-sm border-gray-400 p-3 placeholder-gray-500 focus:outline-none rounded my-2"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required
              >
                <option value="">Select Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          )}

          <button className="py-3 px-5 mt-6 bg-blue-500 text-white rounded w-full max-w-sm">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSkill;

