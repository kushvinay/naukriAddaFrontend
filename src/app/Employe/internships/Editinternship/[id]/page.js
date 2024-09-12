
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { asyncEditInternship } from "@/Store/Actions/EmployeAction";

const Editinternship = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { employe } = useSelector((state) => state.EmployeSlice);
  const internshiparry = employe?.internships?.filter(
    (ele) => ele._id === params.id
  );
  const existinternship = internshiparry[0];

  const [profile, setprofile] = useState(existinternship?.profile);
  const [skills, setskills] = useState(existinternship?.skills);
  const [internshiptype, setinternshiptype] = useState(existinternship?.internshiptype);
  const [opening, setopening] = useState(existinternship?.opening);
  const [from, setfrom] = useState(existinternship?.form);
  const [to, setto] = useState(existinternship?.to);
  const [responsibility, setresponsibility] = useState(
    existinternship?.responsibility
  );
  const [amount, setamount] = useState(existinternship?.Stipend.amount);
  const [perks, setperks] = useState(existinternship?.perks);
  const [assesments, setassesments] = useState("");
  const [status, setstatus] = useState(existinternship?.Stipend.status);
  const [duration, setduration] = useState(existinternship?.duration);
  const [location, setlocation] = useState(existinternship?.location);

  const hendelinternshipedit = (e) => {
    e.preventDefault();
    const internship = {
      profile,
      skills,
      internshiptype,
      opening,
      responsibility,
      duration,
      assesments,
      Stipend: {
        status,
        amount,
      },
      from,
      to,
      perks,
      location,
    };
    console.log(internship);
    dispatch(asyncEditInternship(existinternship?._id, internship));
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-medium mb-8">Edit Internship</h1>

      <form
        className="w-full max-w-4xl flex flex-col items-center"
        onSubmit={hendelinternshipedit}
        method="Post"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="text"
            placeholder="Profile"
            value={profile}
            onChange={(e) => setprofile(e.target.value)}
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
            placeholder="Duration"
            value={duration}
            onChange={(e) => setduration(e.target.value)}
            required
          />

          <label className="text-gray-800">
            Internship Type:
            <select
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              value={internshiptype}
              onChange={(e) => setinternshiptype(e.target.value)}
              required
            >
              <option value="">Select Internship Type</option>
              <option value="In office">In office</option>
              <option value="Remote">Remote</option>
            </select>
          </label>

          <input
            className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none"
            type="number"
            placeholder="Stipend"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            required
          />

          <label className="text-gray-800">
            Stipend Status:
            <select
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              value={status}
              onChange={(e) => setstatus(e.target.value)}
            >
              <option value="">Select Stipend Status</option>
              <option value="Fixed">Fixed</option>
              <option value="Negotiable">Negotiable</option>
              <option value="Performance based">Performance based</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
          <label className="text-gray-800">
            Start From:
            <input
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              type="date"
              value={from}
              onChange={(e) => setfrom(e.target.value)}
            />
          </label>

          <label className="text-gray-800">
            To:
            <input
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              type="date"
              value={to}
              onChange={(e) => setto(e.target.value)}
            />
          </label>

          <label className="text-gray-800">
            Openings:
            <input
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg focus:outline-none w-full"
              type="number"
              placeholder="Job Openings"
              value={opening}
              onChange={(e) => setopening(e.target.value)}
            />
          </label>

          {internshiptype === "In office" && (
            <input
              className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none w-full"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setlocation(e.target.value)}
            />
          )}
        </div>

        <input
          className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none w-full mt-4"
          type="text"
          placeholder="Required Skills"
          value={skills}
          onChange={(e) => setskills(e.target.value)}
        />

        <input
          className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none w-full mt-4"
          type="text"
          placeholder="Perks"
          value={perks}
          onChange={(e) => setperks(e.target.value)}
        />

        <textarea
          className="bg-white text-gray-800 border border-gray-300 p-3 rounded-lg placeholder-gray-500 focus:outline-none w-full mt-4"
          placeholder="Responsibilities"
          value={responsibility}
          onChange={(e) => setresponsibility(e.target.value)}
          rows="4"
        ></textarea>

        <button
          className="text-lg sm:text-xl font-medium h-14 w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg mt-6"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
};

export default Editinternship;
