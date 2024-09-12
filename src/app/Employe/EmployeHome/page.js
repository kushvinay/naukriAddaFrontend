"use client";
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import Responsive from "@/app/components/jobslick";

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

const EmployeHome = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, employe } = useSelector(
    (state) => state.EmployeSlice
  );

  useEffect(() => {
    if (!isAuthenticated) router.push("/Employesignin");
  }, [isAuthenticated, router]);  // Added 'router' to dependency array

  return (
    <div>
      <h1 className='text-4xl text-gray-600 text-center pt-28 font-semibold '>
    
        Welcome {employe && employe.fullname}!
      </h1>
      <h2 className="text-xl text-gray-600 py-5 text-center">
        Elevate Your Workforce with Our Talent Network.
      </h2>
      <p className='text-base text-gray-500 text-center'>
        Join our thriving community of employers and gain access to over 2000+ 
        <br /> 
        skilled candidates or more, all poised to contribute to your company&apos;s success.
      </p>
      <div>
        <h3 className='text-2xl text-center text-gray-800 mt-16 font-medium'>Unlock Talent</h3>
      </div>
    </div>
  );
}

export default EmployeHome;
