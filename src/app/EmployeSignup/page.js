
"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentEmploye, asyncEmployeSignup } from "@/Store/Actions/EmployeAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";
import Link from "next/link";

const Employesignup = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated , employe } = useSelector((state) => state.EmployeSlice);
  console.log(employe)
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [organisationname, setorganisationname] = useState("");
  const [contact, setcontact] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const employe = {
      fullname,
      organisationname,
      email,
      contact,
      password,
    };

    try {
      await dispatch(asyncEmployeSignup(employe));
      
    } catch (error) {
      console.log(error)
    }
    finally{
      setLoading(false);
    }
    // console.log(employe);
    // dispatch(asyncEmployeSignup(employe));
  };
  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    console.log(employe)
    if (isAuthenticated && employe) router.push("/Employe/EmployeHome");
  }, [isAuthenticated]);


  return (
    <div className="fixed w-screen h-screen flex flex-col">
      <Nav />
      <div className="flex-grow flex items-center justify-center p-4">
        <form
          className="w-full max-w-md mx-auto bg-white p-8 rounded-lg "
          onSubmit={handleSignup}
        >
          <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Employe Register</h1>
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="text"
            placeholder="Your Full Name"
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="text"
            placeholder="Organization Name"
            value={organisationname}
            onChange={(e) => setorganisationname(e.target.value)}
          />
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="text"
            placeholder="Contact"
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />
          
          <input
            className="w-full bg-white text-gray-800 border rounded-lg focus:border-blue-500 focus:outline-none p-3 placeholder-gray-500 mb-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
          
          <p className="mt-4 text-sm text-center">Already have an account? <Link className="text-blue-600" href="/Studentlogin">Sign in</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Employesignup;
