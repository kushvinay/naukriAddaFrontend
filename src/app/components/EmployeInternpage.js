// "use client"
// import React from 'react'
// import moment from "moment/moment";
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { asyncIntershipIsactive } from '@/Store/Actions/EmployeAction';
// import { useDispatch } from 'react-redux';

// const EmployeInternpage = ({key , data  }) => {
//     const router = useRouter();
//     const dispatch = useDispatch();
//     const InternshipActiveOrDeactive = () =>{
//       dispatch(asyncIntershipIsactive(data._id));
//     }
//   return (
//     <div >
//         <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold pt-16 ">
//         {data.profile}
//       </h1>
//       <h2 className='text-2xl text-gray-700 text-center '>{data.usersapplied.length==0?"No":data.usersapplied.length} Students Applied for this Internship   {data.usersapplied.length==0?"yet":""}</h2>
//       <div className="w-[850px] m-auto my-10">
//         <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
//           Activly Hiring
//         </button>
//         <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
//           <div>
//             <h4 className=" text-xl text-black py-2">{data.profile}</h4>
//             <p className="text-sm text-gray-600">Wipro</p>
//           </div>
//         </div>
//         <h6 className="text-gray-600 my-2">Pune</h6>
//         <div className=" flex text-sm pb-3 ">
//           <div className="me-7">
//             <h6 className="text-gray-700">Stipend</h6>
//             <h6 className="text-gray-600">5000</h6>
//           </div>
//           <div className="me-7">
//             <h6 className="text-gray-700">Duration</h6>
//             <h6 className="text-gray-600 ">{data?.duration}</h6>
//           </div>
//         </div>
//         <div className="border-b-[1px] pb-2">
//           <p className=" text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
//             {moment(data.createdAt).fromNow()}{" "}
//           </p>
//         </div>
//         <div className="flex justify-end">
//           {/* <button
//             className="text-sky-500 border-[1px] text-sm
//             px-3 py-2 border-sky-500 mt-2 "
//           >
//             View details
//           </button> */}
//         </div>
//         <div className="my-3">
//           <h2 className="text-xl text-gray-700 font-medium py-1 ">
//             Skills
//           </h2>
//           <h6 className="text-gray-600 pt-2">{data.skills}</h6>
//         </div>
//         {data.responsibility && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">
//               Responsibility
//             </h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.responsibility}
//             </h6>
//           </div>
//         )}
//         {data.assesments && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">Assessments</h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.assesments}
//             </h6>
//           </div>
//         )}
//         {data.opening && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">Number Of Opening</h2>
//             <h6 className="text-gray-600 pt-2">
//               {data?.opening}
//             </h6>
//           </div>
//         )}
//         <h2>{data.usersapplied.length} Students Applied for this Internship</h2>
//         <div className=" flex items-center justify-center m-auto py-8">
//             <Link className='px-4 py-2 bg-sky-400 text-white mx-4 rounded-sm' href={`Editinternship/${data._id}`}>
//             Edit Internship
//             </Link>

//             {data.usersapplied.length == 0?'' :<Link href={`StudentResume/${data._id}`} className="px-4 py-2 bg-green-600 text-white mx-4 rounded-sm">Student Resumes</Link>}

//             <button onClick={InternshipActiveOrDeactive} className="px-4 py-2 bg-yellow-500 text-white mx-4 rounded-sm">Deactivate</button>
//         {/* { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applyed</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply now</button> } */}
//         </div>
        
//       </div>
//     </div>
//   )
// }

// export default EmployeInternpage


"use client";
import React from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { asyncIntershipIsactive } from "@/Store/Actions/EmployeAction";

const EmployeInternpage = ({ key, data }) => {
  const dispatch = useDispatch();

  const InternshipActiveOrDeactive = () => {
    dispatch(asyncIntershipIsactive(data._id));
  };

  return (
    <div className="px-4 py-6">
      <h1 className="text-3xl md:text-4xl text-gray-800 text-center font-semibold pt-14 ">
        {data.profile}
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-700 text-center my-4">
        {data.usersapplied.length === 0 ? "No" : data.usersapplied.length}{" "}
        Students Applied for this Internship{" "}
        {data.usersapplied.length === 0 ? "yet" : ""}
      </h2>

      <div className="max-w-4xl m-auto my-10 p-4 bg-white shadow-lg rounded-md">
        <button className="border-[1px] border-gray-300 p-1 rounded text-sm mb-4">
          Actively Hiring
        </button>
        <div className="flex flex-col md:flex-row justify-between border-b-[1px] pb-4 mb-4">
          <div>
            <h4 className="text-xl md:text-2xl text-black py-2">{data.profile}</h4>
            <p className="text-sm text-gray-600">Wipro</p>
          </div>
        </div>
        <h6 className="text-gray-600 my-2">Pune</h6>

        <div className="flex flex-wrap justify-between text-sm pb-3">
          <div className="mb-3 md:mb-0">
            <h6 className="text-gray-700">Stipend</h6>
            <h6 className="text-gray-600">5000</h6>
          </div>
          <div className="mb-3 md:mb-0">
            <h6 className="text-gray-700">Duration</h6>
            <h6 className="text-gray-600">{data?.duration}</h6>
          </div>
        </div>

        <div className="border-b-[1px] pb-2">
          <p className="text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded ">
            {moment(data.createdAt).fromNow()}
          </p>
        </div>

        <div className="my-3">
          <h2 className="text-xl text-gray-700 font-medium py-1">Skills</h2>
          <h6 className="text-gray-600 pt-2">{data.skills}</h6>
        </div>

        {data.responsibility && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Responsibility</h2>
            <h6 className="text-gray-600 pt-2">{data?.responsibility}</h6>
          </div>
        )}

        {data.assesments && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Assessments</h2>
            <h6 className="text-gray-600 pt-2">{data?.assesments}</h6>
          </div>
        )}

        {data.opening && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Number Of Openings</h2>
            <h6 className="text-gray-600 pt-2">{data?.opening}</h6>
          </div>
        )}

        <h2 className="text-gray-700">
          {data.usersapplied.length} Students Applied for this Internship
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center py-8 gap-4">
          <Link
            className="px-4 py-2 bg-sky-400 text-white rounded-sm text-center"
            href={`Editinternship/${data._id}`}
          >
            Edit Internship
          </Link>

          {data.usersapplied.length > 0 && (
            <Link
              href={`StudentResume/${data._id}`}
              className="px-4 py-2 bg-green-600 text-white rounded-sm text-center"
            >
              Student Resumes
            </Link>
          )}

          <button
            onClick={InternshipActiveOrDeactive}
            className="px-4 py-2 bg-yellow-500 text-white rounded-sm text-center"
          >
            Deactivate
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeInternpage;
