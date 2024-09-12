
"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentUserwithall, asynclogin } from "@/Store/Actions/StudentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Nav from "../components/Nav";

const Studentsignin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, student, isLoading } = useSelector((state) => state.StudentSlice);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    const Student = { email, password };
    try {
      await dispatch(asynclogin(Student));
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentUserwithall());
    if (isAuthenticated && student) router.push("/Student/StudentHome");
  }, [isAuthenticated]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <Nav />
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <form
          className="w-full max-w-md bg-white p-8 rounded-lg "
          onSubmit={handleSignin}
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 text-center">
            Job Seekers Login
          </h1>
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          
          <div className="flex justify-end mb-4">
            <Link className="text-sm text-blue-600" href="/Studentforgetpassword">
              Forgot Password?
            </Link>
          </div>
          
          <button
            className="w-full px-5 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            type="submit"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
          
          <div className="text-sm text-center mt-4">
            Do not have an account?{" "}
            <Link className="text-blue-500" href="/Studentsignup">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Studentsignin;
