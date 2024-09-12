// "use client";
// import EmployeInternpage from "@/app/components/EmployeInternpage";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Resume from "@/app/components/Resume";
// import {
//   asyncCurrentEmploye,
//   asyncSetResumes,
// } from "@/Store/Actions/EmployeAction";
// import { useRouter } from "next/navigation";

// const ShowResume = ({ params }) => {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const { isAuthenticated, employe, resumes } = useSelector(
//     (state) => state.EmployeSlice
//   );

//   useEffect(() => {
//     if (!isAuthenticated) {
//       dispatch(asyncCurrentEmploye());
//     }
//     if (!isAuthenticated) router.push("/");
//   }, [isAuthenticated]);

//   const Resumedata = resumes.filter((ele) => ele._id === params.id);
//   console.log(Resumedata);

//   return (
//     <div>
//       {Resumedata &&
//         Resumedata.map((data) => (
//           <Resume data={data} key={data._id} />
//         ))}
//     </div>
//   );
// };

// export default ShowResume;

"use client";
import EmployeInternpage from "@/app/components/EmployeInternpage";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Resume from "@/app/components/Resume";
import {
  asyncCurrentEmploye,
  asyncSetResumes,
} from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";

const ShowResume = ({ params }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, employe, resumes } = useSelector(
    (state) => state.EmployeSlice
  );

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(asyncCurrentEmploye());
    }
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const Resumedata = resumes?.filter((ele) => ele._id === params.id);

  return (
    <div className="px-4 pt-14 py-6 md:px-8 lg:px-16">
      {Resumedata &&
        Resumedata.map((data) => (
          <div
            key={data._id}
            className="bg-white p-6 rounded-lg  max-w-4xl mx-auto"
          >
            <Resume data={data} />
          </div>
        ))}
    </div>
  );
};

export default ShowResume;
