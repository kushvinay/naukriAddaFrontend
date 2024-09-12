"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncEmpchangepassword } from "@/Store/Actions/EmployeAction";

const ChangePassword = () => { // Changed component name to start with an uppercase letter
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.StudentSlice);
  console.log(student);

  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassword = (e) => {
    e.preventDefault();
    if (password !== conPassword) {
      return setError("Passwords do not match");
    }
    console.log(password);
    dispatch(asyncEmpchangepassword(password));
  };

  return (
    <div className="w-full h-full  flex flex-col justify-center items-center px-4">
      <h1 className="text-2xl font-semibold mb-6 text-center">Change Your Password</h1>
      <form method="POST" className="w-full max-w-sm text-center" onSubmit={handlePassword}>
        <input
          className="mt-4 w-full block bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="mt-4 w-full block bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 focus:outline-none"
          type="password"
          name="conformPassword"
          placeholder="Confirm Password"
          value={conPassword}
          onChange={(e) => setConPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button className="mt-6 w-full px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
