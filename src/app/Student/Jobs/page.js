"use client"
import React, { useEffect, useState } from 'react'
import axios from "../../../../axiosconfig";
import Biginterncard from '@/app/components/Biginterncard';
import JobContant from '@/app/components/JobContant';
import Name from '@/app/components/Name';
import { useDispatch, useSelector } from 'react-redux';
import { setjobs } from '@/Store/Actions/StudentActions';
import { useRouter } from "next/navigation";


// async function getjobs() {
//   const { data } = await axios.post("/user/student/find-job/pagination");

//   if (!data) {
//     throw new Error("Failed to fetch internship");
//   }
  
//   return await data.jobs;
// }

const Jobs = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const fatchin = async () => {
    await dispatch(setjobs())
  };

  let { isAuthenticated , student , jobs} = useSelector((state) => state.StudentSlice);
  
  useEffect(() => {
    if(!isAuthenticated && !student) router.push("/Studentlogin")
    fatchin()
  }, [isAuthenticated]);


  // const [njobs, setnjobs] = useState(jobs);
  //   // const jobs = await getjobs();
  //   console.log(jobs )
  //   console.log(njobs)
  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center my-6 sm:my-10 text-gray-800">
          JOBS
        </h1>
      
      <div className=" flex flex-col items-center ">
        <JobContant />
      </div>

    </div>
  )
}

export default Jobs