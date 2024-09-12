// "use client"
// import React, { useEffect } from 'react'
// import axios from "../../../../axiosconfig";
// import Biginterncard from '@/app/components/Biginterncard';
// import InternshipContant from '@/app/components/InternshipContant';
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from 'react-redux';



// // async function getInternship() {
// //   const { data } = await axios.post("/user/student/find-internship/pagination",);

// //   if (!data) {
// //     throw new Error("Failed to fetch internship");
// //   }
  
// //   return await data.internships;
// // }


// const Internships =  () => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   // const fatchin =  () => {
//   //    dispatch(setjobs())
//   // };
//   let { isAuthenticated , student} = useSelector((state) => state.StudentSlice);

//   useEffect(() => {
//     if(!isAuthenticated && !student) router.push("/Studentlogin")
//   }, [isAuthenticated]);


//   // console.log(internships)

//     // const internships = await getInternship();
//   return (
//     <div>
//         <h1 className="text-3xl font-semiboldS text-center  my-10 text-gray-800 ">INTERNSHIPS</h1>
//       <div className=" flex flex-col items-center ">
//      <InternshipContant />
//       </div>

//     </div>
//   )
// }

// export default Internships

"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import InternshipContant from "@/app/components/InternshipContant";

const Internships = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  let { isAuthenticated, student } = useSelector((state) => state.StudentSlice);

  useEffect(() => {
    if (!isAuthenticated && !student) router.push("/Studentlogin");
  }, [isAuthenticated]);

  return (
    <div className=" min-h-screen  px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center my-6 sm:my-10 text-gray-700">
        INTERNSHIPS
      </h1>
      <div className="flex flex-col items-center">
        {/* Assuming InternshipContant is responsive on its own */}
        <InternshipContant />
      </div>
    </div>
  );
};

export default Internships;
