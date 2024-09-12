
"use client";
import React, { useState } from "react";
import { asyncEmployeCreateInternship } from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const CreateInternship = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [profile, setprofile] = useState("");
  const [skills, setskills] = useState("");
  const [internshiptype, setinternshiptype] = useState("");
  const [opening, setopening] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [responsibility, setresponsibility] = useState("");
  const [amount, setamount] = useState("");
  const [perks, setperks] = useState("");
  const [assesments, setassesments] = useState("");
  const [status, setstatus] = useState();
  const [duration, setduration] = useState('');
  const [location, setlocation] = useState("");

  const hendelinternship = (e) => {
    e.preventDefault();
    const internship = {
      profile,
      skills,
      internshiptype,
      opening,
      responsibility,
      duration,
      Stipend: {
        status,
        amount,
      },
      assesments,
    };
    if (location != "") {
      internship.location = location;
    }
    dispatch(asyncEmployeCreateInternship(internship)).then(() => {
      router.push("/Employe/internships");
    });
  };

  return (
    <div className="px-5 pt-14 sm:px-10 md:px-20 lg:px-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl font-medium my-5">Internship Post</h1>
        <form className="w-full max-w-lg" onSubmit={hendelinternship} method="Post">
          <input
            className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
            type="text"
            placeholder="Profile"
            value={profile}
            onChange={(e) => setprofile(e.target.value)}
            required
          />
          <input
            className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
            type="text"
            placeholder="Assessments"
            value={assesments}
            onChange={(e) => setassesments(e.target.value)}
            required
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none"
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setduration(e.target.value)}
              required
            />
            <label className="text-gray-800">
              Internship Type:
              <select
                className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none mt-1"
                value={internshiptype}
                onChange={(e) => setinternshiptype(e.target.value)}
                required
              >
                <option value="">Select internship type</option>
                <option value="In office">In office</option>
                <option value="Remote">Remote</option>
              </select>
            </label>
            <input
              className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none"
              type="number"
              placeholder="Stipend"
              value={amount}
              onChange={(e) => setamount(e.target.value)}
              required
            />
            <label className="text-gray-800">
              Stipend Status
              <select
                className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none mt-1"
                value={status}
                onChange={(e) => setstatus(e.target.value)}
                required
              >
                <option value="">Select stipend status</option>
                <option value="Fixed">Fixed</option>
                <option value="Negotiable">Negotiable</option>
                <option value="Performance based">Performance based</option>
                <option value="Unpaid">Unpaid</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <label>
              Start from:
              <input
                className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none mt-1"
                type="date"
                name="from"
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                required
              />
            </label>
            <label>
              To:
              <input
                className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none mt-1"
                type="date"
                name="to"
                value={to}
                onChange={(e) => setto(e.target.value)}
                required
              />
            </label>
            <label>
              Openings:
              <input
                className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none mt-1"
                type="number"
                value={opening}
                placeholder="Job Openings"
                onChange={(e) => setopening(e.target.value)}
                required
              />
            </label>
          </div>

          {internshiptype === "In office" && (
            <input
              className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
              type="text"
              placeholder="Location"
              onChange={(e) => setlocation(e.target.value)}
            />
          )}

          <input
            className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
            type="text"
            placeholder="Write Required Skills"
            value={skills}
            onChange={(e) => setskills(e.target.value)}
            required
          />
          <input
            className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
            type="text"
            placeholder="Perks"
            value={perks}
            onChange={(e) => setperks(e.target.value)}
            required
          />
          <textarea
            className="bg-white text-gray-800 border border-gray-400 p-3 w-full text-sm rounded focus:outline-none my-2"
            placeholder="Write full Job Responsibility"
            name="Responsibility"
            value={responsibility}
            cols="60"
            rows="4"
            onChange={(e) => setresponsibility(e.target.value)}
            required
          ></textarea>

          <button
            className="m-auto h-14 w-40 rounded-md text-2xl px-3 py-2 bg-blue-600 text-white mt-3"
            type="submit"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateInternship;
