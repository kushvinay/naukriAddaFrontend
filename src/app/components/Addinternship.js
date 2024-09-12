
"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { asynaddInternshipRes } from "@/Store/Actions/StudentActions";

const AddInternship = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [startdate, setStartdate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [description, setDescription] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e?.target?.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const internship = {
      profile,
      organization,
      location,
      startdate,
      enddate,
      description,
    };
    dispatch(asynaddInternshipRes(internship));
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center z-50"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="bg-white relative w-full max-w-sm md:max-w-md lg:max-w-2xl mx-4 md:mx-auto p-5 rounded-lg shadow-lg max-h-screen overflow-auto">
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
          <h1 className="text-2xl text-gray-800 text-center py-5">Internship Details</h1>
          
          <label className="flex flex-col w-full mb-4">
            Profile
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="profile"
              value={profile}
              placeholder="Ex: Operation"
              onChange={(e) => setProfile(e.target.value)}
            />
          </label>

          <div className="w-full flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
            <label className="flex flex-col w-full md:w-1/2">
              Start Date
              <input
                className="bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
                type="date"
                name="startdate"
                value={startdate}
                onChange={(e) => setStartdate(e.target.value)}
              />
            </label>
            <label className="flex flex-col w-full md:w-1/2">
              End Date
              <input
                className="bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
                type="date"
                name="enddate"
                value={enddate}
                onChange={(e) => setEnddate(e.target.value)}
              />
            </label>
          </div>

          <label className="flex flex-col w-full mb-4">
            Organization
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="organization"
              value={organization}
              placeholder="Ex: Wipro"
              onChange={(e) => setOrganization(e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full mb-4">
            Location
            <input
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              type="text"
              name="location"
              value={location}
              placeholder="Ex: Bangalore/Work from home"
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label className="flex flex-col w-full mb-4">
            Description
            <textarea
              className="w-full bg-white text-gray-800 border text-sm border-gray-300 p-3 placeholder-gray-500 focus:outline-none"
              placeholder="Short description of work done (max 250 words)"
              name="description"
              value={description}
              rows="6"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <button className="py-3 px-5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 w-full">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInternship;
