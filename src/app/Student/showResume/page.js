"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentResume from "@/app/components/StudentResume"
import {
  asyncCurrentUser,
  
} from "@/Store/Actions/StudentActions";
import { useRouter } from "next/navigation";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";


const showResume = ({ params }) => {
  

  const dispatch = useDispatch();
  const router = useRouter();
  const [resume, setresume] = useState();
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentSlice
  );


  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(asyncCurrentUser());
    }
    if(student?.resume){
    setresume(student)
  }
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);


  return (
    <div className="px-4 pt-14 py-6 md:px-8 lg:px-16">
      
    
            { resume && 
            <StudentResume  />
            }



    </div>
  );
};

export default showResume;