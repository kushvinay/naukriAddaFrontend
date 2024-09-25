
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentResume from "@/app/components/StudentResume";
import { asyncCurrentUser } from "@/Store/Actions/StudentActions";
import { useRouter } from "next/navigation";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ShowResume = ({ params }) => { // Updated the component name to start with an uppercase letter
  const dispatch = useDispatch();
  const router = useRouter();
  const [resume, setResume] = useState(); // Proper naming for `resume`
  const { isAuthenticated, student } = useSelector(
    (state) => state.StudentSlice
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(asyncCurrentUser());
    }
    if (student?.resume) {
      setResume(student); // Fixed the capitalization of `setResume`
    }
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated, student, dispatch, router]); // Added `student`, `dispatch`, and `router` to dependency array

  return (
    <div className="px-4 pt-14 py-6 md:px-8 lg:px-16">
      {resume && <StudentResume />}
    </div>
  );
};

export default ShowResume; // Updated the export to match the new component name
