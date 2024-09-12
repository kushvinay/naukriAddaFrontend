"use client";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Conpo = () => {  // Capitalize the component name

  const dispatch = useDispatch();  // Correctly using the useDispatch hook
  const { isAuthenticated, student } = useSelector((state) => state.StudentSlice);  // Correctly using the useSelector hook

  console.log(student);  // Logging student data

  return (
    <div>
      {/* Your JSX here */}
    </div>
  );
};

export default Conpo;
