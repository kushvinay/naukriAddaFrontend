"use client";
import React, { useEffect } from "react";
import { asyncCurrentEmploye, asyncSetResumes } from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ResumeCard from "@/app/components/ResumeCard";

const StudentResume = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe, resumes } = useSelector(
    (state) => state.EmployeSlice
  );

  const fetchResume = () => {
    dispatch(asyncSetResumes(params.id));
  };

  useEffect(() => {
    fetchResume();
  }, []); // Consider adding dependencies if needed

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated, router, dispatch]); // Ensure you include `router` and `dispatch` in the dependencies

  return (
    <div className="flex flex-wrap py-8 px-16">
      {resumes &&
        resumes.map((resume) => (
          <div key={resume._id}>
            <ResumeCard data={resume} />
          </div>
        ))}
    </div>
  );
};

export default StudentResume;
