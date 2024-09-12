"use client";
import React, { useEffect, useState } from "react";
import { asyncCurrentEmploye, asynupdateemploye } from "@/Store/Actions/EmployeAction";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Nav from "@/app/components/Nav";
import Link from "next/link";

const Updateemploye = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated , employe } = useSelector((state) => state.EmployeSlice);
  console.log(employe)
  const [fullname, setfullname] = useState("");
  // const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [organisationname, setorganisationname] = useState("");
  const [contact, setcontact] = useState("");

  const hendelupdate = (e) => {
    e.preventDefault();
    const employe = {};
    if (fullname.trim() !== '') {
        employe.fullName = fullname;
    }
    
    if (email.trim() !== '') {
        employe.email = email;
    }
    if (organisationname.trim() !== '') {
        employe.organisationname = organisationname;
    }
    if (contact.trim() !== '') {
        employe.contact = contact;
    }
    // console.log(employe);
    dispatch(asynupdateemploye(employe)).then(()=> {
      router.push("/Employe/EmployeHome");
    });
  
  };
  
  useEffect(() => {
    if (!isAuthenticated) router.push("/Employesignin");
  }, [isAuthenticated]);



  return (
    <div className="h-5/6 flex items-center justify-center pt-14">
      <div className="w-full max-w-lg  rounded-lg p-6 md:p-8 ">
        <form
          className="flex flex-col text-center"
          onSubmit={hendelupdate}
          method="Post"
        >
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-700 mb-6">Update Information </h1>
          <input
            className="w-full max-w-md bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 mb-4"
            type="text"
            placeholder={employe && employe.fullname}
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
          />
          {/* <input
            className="w-80 bg-white text-gray-800 border text-sm border-[#272727] p-3 placeholder-gray-500 focus:outline-none my-2"
            type="text"
            placeholder="LastName"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
          /> */}
            <input  className="w-full max-w-md bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 mb-4"
              type="text"
              placeholder={employe && employe.organisationname}
              value={organisationname}
              onChange={(e) => setorganisationname(e.target.value)}
            />
          
          <input className="w-full max-w-md bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 mb-4"
            type="email"
            placeholder={employe && employe.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className ="w-full max-w-md bg-white text-gray-800 border rounded-lg focus:border-blue-500 p-3 placeholder-gray-500 mb-4"
            type="number"
            placeholder={employe && employe.contact}
            value={contact}
            onChange={(e) => setcontact(e.target.value)}
            required
          />
          
          <button
            className=" w-full max-w-md px-5 py-3 bg-blue-600 text-white rounded-lg"
            type="submit"
            onSubmit={hendelupdate}
          >
            Update
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Updateemploye;
