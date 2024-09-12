

"use client";
import React, { useEffect, useState } from "react";
import Responsive from "@/app/components/slick"; 
import Name from "@/app/components/Name";
import Responsivejob from "@/app/components/jobslick";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const BreakpointSlides = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 530 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 530, min: 0 },
    items: 1,
  },
};

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const fatchin = async () => {
    await dispatch(setjobs());
  };

  let { isAuthenticated, jobs, internships } = useSelector(
    (state) => state.StudentSlice
  );

  let Internships = [];
  if (internships != null) {
    Internships = internships.slice(0, 5);
  }

  let Jobs = [];
  if (jobs != null) {
    Jobs = jobs.slice(0, 5);
  }

  return (
    <div className="text-center p-6 md:p-10 bg-white">
      <Name />
      
      <h2 className="text-lg md:text-xl text-gray-600 py-4 md:py-5">
        Let&rsquo;s help you find your dream career
      </h2>

      <h1 className="text-2xl md:text-3xl font-semibold my-3 md:my-4">
        Internships
      </h1>

      <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto">
        <Responsive data={Internships} />
      </div>

      <h1 className="text-2xl md:text-3xl font-semibold mt-12 md:mt-20 pb-3 md:pb-4">
        Jobs
      </h1>

      <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto">
        <Responsivejob data={Jobs} />
      </div>
    </div>
  );
};

export default Page;
