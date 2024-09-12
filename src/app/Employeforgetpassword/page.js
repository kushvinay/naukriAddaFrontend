"use client";
import React, { useState } from "react";
import { asyncforgetpassword } from "@/Store/Actions/EmployeAction";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";

const Employeforgetpassword = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(asyncforgetpassword(email));
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />

      <div className="flex-grow flex items-center justify-center px-4 md:px-8 py-6 md:py-8 ">
        <form 
          className="w-full max-w-md bg-white p-6 md:p-8 rounded-lg"
          onSubmit={handlesubmit}
          method="Post"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
            Forget Password
          </h1>

          <label className="block text-sm text-gray-700 mb-4">
            Enter your valid email address
            <input
              className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mt-2"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <button
            className="w-full py-3 bg-blue-700 text-white rounded-lg mt-4 hover:bg-blue-600 transition"
            type="submit"
          >
            Send Mail
          </button>

          <div className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <Link className="text-blue-500 hover:underline" href="/EmployeSignup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Employeforgetpassword;
