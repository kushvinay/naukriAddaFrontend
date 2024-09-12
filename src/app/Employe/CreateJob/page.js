
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { asyncEmployeCreateJob } from "@/Store/Actions/EmployeAction";

const CreateJob = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.EmployeSlice);

  const [title, settitle] = useState("");
  const [skills, setskills] = useState("");
  const [jobtype, setjobtype] = useState("");
  const [opening, setopening] = useState("");
  const [description, setdescription] = useState("");
  const [salary, setsalary] = useState("");
  const [perks, setperks] = useState("");
  const [assesments, setassesments] = useState("");
  const [preference, setpreference] = useState("");
  const [location, setlocation] = useState("");

  const createJob = (e) => {
    e.preventDefault();
    const job = {
      title,
      skills,
      jobtype,
      opening,
      description,
      salary,
      assesments,
      preference,
    };
    if (location !== "") {
      job.location = location;
    }
    console.log(job);
    dispatch(asyncEmployeCreateJob(job)).then(() => {
      router.push("/Employe/jobs");
    });
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-medium mb-8">Job Post</h1>

      <form
        className="w-full max-w-4xl flex flex-col items-center"
        onSubmit={createJob}
        method="Post"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e) => settitle(e.target.value)}
            required
          />

          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Assessment"
            value={assesments}
            onChange={(e) => setassesments(e.target.value)}
          />

          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Perks"
            value={perks}
            onChange={(e) => setperks(e.target.value)}
          />

          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="number"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setsalary(e.target.value)}
            required
          />

          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="number"
            placeholder="Opening"
            value={opening}
            onChange={(e) => setopening(e.target.value)}
            required
          />

          <label className="text-gray-800">
            Job Type:
            <select
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              value={jobtype}
              onChange={(e) => setjobtype(e.target.value)}
              required
            >
              <option value="">Select Job type</option>
              <option value="In office">In office</option>
              <option value="Remote">Remote</option>
            </select>
          </label>
        </div>

        {jobtype === "In office" && (
          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none my-2 w-full"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
          />
        )}

        <input
          className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none my-2 w-full"
          type="text"
          placeholder="Required Skills"
          value={skills}
          onChange={(e) => setskills(e.target.value)}
        />

        <textarea
          className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none my-2 w-full"
          placeholder="Job Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          rows="4"
        ></textarea>

        <textarea
          className="bg-white text-gray-800 border border-[#4c68f2] p-3 rounded-lg placeholder-gray-500 focus:outline-none my-2 w-full"
          placeholder="Preferences"
          value={preference}
          onChange={(e) => setpreference(e.target.value)}
          rows="4"
        ></textarea>

        <button
          className="text-lg sm:text-xl font-medium h-14 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg mt-6"
          type="submit"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

export default CreateJob;
