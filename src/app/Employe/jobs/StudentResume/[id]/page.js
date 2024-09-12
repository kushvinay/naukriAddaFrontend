// "use client";
// import React, { useEffect } from "react";
// import { asyncCurrentEmploye, asyncSetResumesjob  } from "@/Store/Actions/EmployeAction";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import ResumeCard from "@/app/components/ResumeCard";

// const StudentResume = ({params}) => {
//   const router = useRouter();
//   const dispatch = useDispatch();
//   const { isAuthenticated, employe ,resumes } = useSelector(
//     (state) => state.EmployeSlice
//   );
//   const fatchResume = () => {
//     dispatch(asyncSetResumesjob(params.id))
//   }

//   useEffect(() => {
//     fatchResume();
//   },[]);

//   useEffect(() => {
//     if (!isAuthenticated) dispatch(asyncCurrentEmploye());
//     if (!isAuthenticated) router.push("/");
//   }, [isAuthenticated]);


//   console.log(resumes)
//   return ( 
//   <div className=" flex flex-wrap py-8 px-16 ">
//     {resumes &&
//     resumes.map((resume) => (
//       <div key={resume._id}>
//         <ResumeCard data={resume} />
//       </div>
//     ))
//     }
//   </div>
//   );
// };

// export default StudentResume;


"use client";
import React, { useEffect } from "react";
import { asyncCurrentEmploye, asyncSetResumesjob } from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import ResumeCard from "@/app/components/ResumeCard";

const StudentResume = ({ params }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, employe, resumes } = useSelector(
    (state) => state.EmployeSlice
  );

  const fatchResume = () => {
    dispatch(asyncSetResumesjob(params.id));
  };

  useEffect(() => {
    fatchResume();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) dispatch(asyncCurrentEmploye());
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  return (
    <div className="px-4 py-6 pt-20 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resumes &&
          resumes.map((resume) => (
            <div key={resume._id}>
              <ResumeCard data={resume} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentResume;
