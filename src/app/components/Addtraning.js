
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddcoursesRes } from "@/Store/Actions/StudentActions";

const AddTraining = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();

  const [training, setTraining] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      training,
      organization,
      location,
      startDate,
      endDate,
      description,
    };
    dispatch(asynaddcoursesRes(info));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white relative w-full mt-2 max-w-sm md:max-w-md lg:max-w-2xl mx-4 md:mx-auto p-5 rounded-lg shadow-lg max-h-screen overflow-auto">
        <button
          className="text-2xl absolute top-4 right-4 focus:outline-none"
          onClick={() => onClose()}
        >
          X
        </button>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-gray-800 text-center py-4 sm:py-6">
            Training/Courses Details
          </h1>

          <label className="flex flex-col w-full">
            Training Program
            <input
              className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
              type="text"
              value={training}
              placeholder="Ex: Web Development"
              onChange={(e) => setTraining(e.target.value)}
              required
            />
          </label>

          <div className="w-full flex flex-col sm:flex-row justify-between gap-2">
            <label className="flex flex-col w-full">
              Start Date
              <input
                className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </label>

            <label className="flex flex-col w-full">
              End Date
              <input
                className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </label>
          </div>

          <label className="flex flex-col w-full">
            Organization
            <input
              className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
              type="text"
              value={organization}
              placeholder="Ex: Wipro"
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </label>

          <label className="flex flex-col w-full">
            Location
            <input
              className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
              type="text"
              value={location}
              placeholder="Ex: Bangalore / Work from home"
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>

          <textarea
            className="w-full bg-white text-gray-800 border border-gray-400 text-sm p-3 rounded my-2 focus:outline-none"
            placeholder="Short description of work done (max 250 words)"
            value={description}
            rows="5"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>

          <button
            className="py-3 px-5 mt-6 bg-blue-500 text-white rounded w-full max-w-sm focus:outline-none hover:bg-blue-600"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTraining;
