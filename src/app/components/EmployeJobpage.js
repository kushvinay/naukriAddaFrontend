// import React from "react";
// import moment from "moment/moment";
// import { useDispatch } from "react-redux";
// import { asyncJobIsactive } from "@/Store/Actions/EmployeAction";
// import Link from "next/link";

// const Employejobpage = ({ key, data }) => {
//   const dispatch = useDispatch();
//   const jobActiveOrDeactive = () => {
//     dispatch(asyncJobIsactive(data._id));
//   };
//   return (
//     <div>
//       <h1 className="text-4xl text-gray-800 text-center py-6 font-semibold pt-14 ">
//         {data.title}
//       </h1>
//       <h2 className="text-2xl text-gray-700 text-center ">
//         {data.usersapplied.length == 0 ? "No" : data.usersapplied.length}{" "}
//         Students Applied for this profile{" "}
//         {data.usersapplied.length == 0 ? "yet" : ""}
//       </h2>
//       <div className="w-[850px] m-auto my-10">
//         <button className=" border-[1px] border-gray-300 p-1 rounded text-sm">
//           Activly Hiring
//         </button>
//         <div className="flex justify-between border-b-[1px] pb-4 mt-5 mb-1">
//           <div>
//             <h4 className=" text-xl text-black py-2">{data.title}</h4>
//             <p className="text-sm text-gray-600">{data.organisationname}</p>
//           </div>
//         </div>
//         <h6 className="text-gray-600 my-2">{data.location}</h6>
//         <div className=" flex text-sm pb-3 ">
//           <div className="me-7">
//             <h6 className="text-gray-700">Salary</h6>
//             <h6 className="text-gray-600">{data.salary}</h6>
//           </div>
//           {/* <div className="me-7">
//             <h6 className="text-gray-700">DURATION</h6>
//             <h6 className="text-gray-600 ">{data?.duration}</h6>
//           </div> */}
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
//               Data Description
//             </h2>
//             <h6 className="text-gray-600 pt-2">{data.description}</h6>
//           </div>
//         )}
//         {data.assesments && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">
//               Assessments
//             </h2>
//             <h6 className="text-gray-600 pt-2">{data?.assesments}</h6>
//           </div>
//         )}
//         {data.opening && (
//           <div className="my-3">
//             <h2 className="text-xl text-gray-700 font-medium py-1 ">
//               Number Of Opening
//             </h2>
//             <h6 className="text-gray-600 pt-2">{data?.opening}</h6>
//           </div>
//         )}
//         <div className=" m-auto py-8 flex items-center justify-center">
//           <Link
//             className="px-4 py-2 bg-sky-400 text-white mx-4 rounded-sm"
//             href={`Editjobs/${data._id}`}
//           >
//             Edit Job
//           </Link>
//           {data.usersapplied.length == 0?'' :<Link href={`StudentResume/${data._id}`} className="px-4 py-2 bg-green-600 text-white mx-4 rounded-sm">Student Resumes</Link>}

//           <button
//             onClick={jobActiveOrDeactive}
//             className="px-4 py-2 bg-yellow-500 text-white mx-4 rounded-sm"
//           >
//             Deactivate
//           </button>
//           {/* { apply?<button className=" px-4 py-2 bg-green-400 text-white">Applyed</button>:<button className="  px-4 py-2 bg-sky-400 text-white "onClick={handleApply}>Apply now</button> } */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Employejobpage;

import React from "react";
import moment from "moment/moment";
import { useDispatch } from "react-redux";
import { asyncJobIsactive } from "@/Store/Actions/EmployeAction";
import Link from "next/link";

const Employejobpage = ({ key, data }) => {
  const dispatch = useDispatch();
  const jobActiveOrDeactive = () => {
    dispatch(asyncJobIsactive(data._id));
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl text-gray-800 text-center py-6 font-semibold pt-20">
        {data.title}
      </h1>
      <h2 className="text-lg sm:text-2xl text-gray-700 text-center">
        {data.usersapplied.length === 0 ? "No" : data.usersapplied.length}{" "}
        Students Applied for this job {data.usersapplied.length === 0 ? "yet" : ""}
      </h2>
      <div className="w-full max-w-4xl mx-auto my-10 bg-white shadow-md rounded-lg p-6">
        <button className="border border-gray-300 p-2 rounded text-sm">
          Actively Hiring
        </button>
        <div className="flex flex-col sm:flex-row justify-between border-b pb-4 mt-5 mb-1">
          <div>
            <h4 className="text-xl text-black py-2">{data.title}</h4>
            <p className="text-sm text-gray-600">{data.organisationname}</p>
          </div>
        </div>
        <h6 className="text-gray-600 my-2">{data.location}</h6>
        <div className="flex flex-col sm:flex-row text-sm pb-3 space-y-3 sm:space-y-0">
          <div className="sm:mr-7">
            <h6 className="text-gray-700">Salary</h6>
            <h6 className="text-gray-600">{data.salary}</h6>
          </div>
        </div>
        <div className="border-b pb-2">
          <p className="text-xs text-green-600 bg-green-100 inline-block p-1 rounded">
            {moment(data.createdAt).fromNow()}
          </p>
        </div>

        <div className="my-3">
          <h2 className="text-xl text-gray-700 font-medium py-1">Skills</h2>
          <h6 className="text-gray-600 pt-2">{data.skills}</h6>
        </div>

        {data.responsibility && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Job Description</h2>
            <h6 className="text-gray-600 pt-2">{data.description}</h6>
          </div>
        )}

        {data.assesments && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Assessments</h2>
            <h6 className="text-gray-600 pt-2">{data.assesments}</h6>
          </div>
        )}

        {data.opening && (
          <div className="my-3">
            <h2 className="text-xl text-gray-700 font-medium py-1">Number Of Openings</h2>
            <h6 className="text-gray-600 pt-2">{data.opening}</h6>
          </div>
        )}

        <div className="py-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition"
            href={`Editjobs/${data._id}`}
          >
            Edit Job
          </Link>
          {data.usersapplied.length > 0 && (
            <Link
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
              href={`StudentResume/${data._id}`}
            >
              Student Resumes
            </Link>
          )}
          <button
            onClick={jobActiveOrDeactive}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            {data.isActive ? "Deactivate" : "Activate"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employejobpage;
