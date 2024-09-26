
"use client";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Link from "next/link";
import Responsive from "@/app/components/slick";
import Responsivejob from "@/app/components/jobslick";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setjobs, setinternships } from "@/Store/Actions/StudentActions";

export default function Home() {

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setjobs()); // Fetch jobs
    dispatch(setinternships()); // Fetch internships
  }, [dispatch]);


  const { isAuthenticated, jobs, internships, student } = useSelector(
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
    <div className="min-h-screen pt-14 flex flex-col">
      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center pt-14">
        {/* Main Heading */}
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium text-center leading-snug sm:leading-normal">
          Looking for Opportunities
          <Image
            className="inline-block pb-2"
            src="/log.png"
            height={40}
            width={40}
            alt="logo"
          />
          <br />
          Build Your Future. Build Your Dream.
        </h1>

        {/* Subheading */}
        <h3 className="text-base sm:text-lg md:text-xl text-gray-500 text-center mt-6 sm:mt-8 md:mt-12 px-4">
          Introducing our latest creation in the realm of job search services &{" "}
          <br className="hidden md:inline" />
          making finding available job vacancies a breeze for both job seekers
          and employers.
        </h3>

        {/* Main Image */}
        <Image
          className="m-auto mt-8 sm:mt-10 md:mt-12  w-auto max-w-[265px] sm:max-w-[320px] md:max-w-[420px]"
          src="/log.png"
          height={420}
          width={165}
          alt="Main Logo"
        />

        {/* Features Section */}
        <div className="mt-8 sm:mt-12 md:mt-0 w-full">
          {/* Headline */}
          <h2 className="text-xl   sm:text-2xl md:text-3xl lg:mt-0 lg:text-4xl text-center text-[#742e2e]">
            NaukriAdda JOB & INTERNSHIP TOP FEATURES
          </h2>

          {/* Features Grid */}
          <div
            id="feature"
            className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-10 sm:mt-12 lg:mt-16"
          >
            <div className="w-[250px] h-[300px] rounded-lg text-white bg-[#d390d0] flex flex-col justify-center items-center">
              <h6 className="mt-3 text-lg sm:text-xl">Resume Builder</h6>
              <p className="text-[#ddd] text-sm sm:text-base">
                Build your resume in a few steps
              </p>
            </div>

            <div className="w-[250px] h-[300px] rounded-lg bg-[#c49b3e] flex flex-col justify-center items-center text-white">
              <h6 className="mt-3 text-lg sm:text-xl">Qualified Student</h6>
              <p className="text-sm sm:text-base">Find the best students</p>
            </div>

            <div className="w-[250px] h-[300px] rounded-lg bg-[#54b670] flex flex-col justify-center items-center text-white">
              <h6 className="mt-3 text-lg sm:text-xl">Verified Jobs</h6>
              <p className="text-[#ddd] text-sm sm:text-base">
                100% verified and save jobs
              </p>
            </div>

            <div className="w-[250px] h-[300px] rounded-lg bg-blue-500 flex flex-col justify-center items-center text-white">
              <h6 className="mt-3 text-lg sm:text-xl">Verified Internships</h6>
              <p className="text-[#ddd] text-sm text-center sm:text-base">
                100% verified and save internships
              </p>
            </div>
          </div>
          {/* Recent Jobs & Internships Section */}
        

            <div className="mt-10 p-10 md:p-10  text-center">
              <h1 className="text-xl sm:text-2xl mb-4  lg:text-3xl text-gray-800 font-bold">
                Recent Job Openings
              </h1>

              <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto  mb-6">
                <Responsivejob data={Jobs} student={student} />
              </div>


              <h2 className="text-xl pt-8 sm:text-2xl mb-4 lg:text-3xl text-gray-800 font-bold">
                Recent Internship Openings
              </h2>

              <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto">
                {/* Pass internships data to the Responsive component */}
                <Responsive data={Internships} student={student} />
              </div>

            </div>
          

          {/* View All Button */}
          <div className="mt-5 sm:mt-10 pb-10 p-5 text-center">
            <Link
              href="/Studentlogin"
              className="px-5 py-4 pt-3  bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";
// import Image from "next/image";
// import Nav from "@/app/components/Nav";
// import Link from "next/link";
// import Responsive from "@/app/components/slick";
// import Responsivejob from "@/app/components/jobslick";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { setjobs, setinternships } from "@/Store/Actions/StudentActions";

// export default function Home() {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setjobs()); // Fetch jobs
//     dispatch(setinternships()); // Fetch internships
//   }, [dispatch]);

//   const { isAuthenticated, jobs, internships, student } = useSelector(
//     (state) => state.StudentSlice
//   );

//   let Internships = [];
//   if (internships != null) {
//     Internships = internships.slice(0, 5);
//   }

//   let Jobs = [];
//   if (jobs != null) {
//     Jobs = jobs.slice(0, 5);
//   }

//   return (
//     <div className="min-h-screen pt-14 flex flex-col">
//       {/* Navigation */}
//       <Nav />

//       {/* Main Content */}
//       <div className="flex-grow flex flex-col items-center pt-14">
//         {/* Main Heading */}
//          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-medium text-center leading-snug sm:leading-normal">
//            Looking for Opportunities
//           <Image
//             className="inline-block pb-2"
//             src="/log.png"
//             height={40}
//             width={40}
//             alt="logo"
//           />
//           <br />
//           Build Your Future. Build Your Dream.
//         </h1>

//         {/* Subheading */}
//         <h3 className="text-base sm:text-lg md:text-xl text-gray-500 text-center mt-6 sm:mt-8 md:mt-12 px-4">
//           Introducing our latest creation in the realm of job search services &
//           <br className="hidden md:inline" />
//           making finding available job vacancies a breeze for both job seekers
//           and employers.
//         </h3>

//         {/* Main Image */}
//         <Image
//           className="m-auto mt-8 sm:mt-10 md:mt-12 w-auto max-w-[265px] sm:max-w-[320px] md:max-w-[420px]"
//           src="/log.png"
//           height={420}
//           width={165}
//           alt="Main Logo"
//         />

//         {/* Features Section */}
//         <div className="mt-8 sm:mt-12 md:mt-0 w-full">
//           {/* Headline */}
//           <h2 className="text-xl sm:text-2xl md:text-3xl lg:mt-0 lg:text-4xl text-center text-[#742e2e]">
//             NaukriAdda JOB & INTERNSHIP TOP FEATURES
//           </h2>

//           {/* Features Grid */}
//           <div
//             id="feature"
//             className="w-full flex flex-col sm:flex-row justify-center items-center gap-5 mt-10 sm:mt-12 lg:mt-16"
//           >
//             <div className="w-[250px] h-[300px] rounded-lg text-white bg-[#d390d0] flex flex-col justify-center items-center">
//               <h6 className="mt-3 text-lg sm:text-xl">Resume Builder</h6>
//               <p className="text-[#ddd] text-sm sm:text-base">
//                 Build your resume in a few steps
//               </p>
//             </div>

//             <div className="w-[250px] h-[300px] rounded-lg bg-[#c49b3e] flex flex-col justify-center items-center text-white">
//               <h6 className="mt-3 text-lg sm:text-xl">Qualified Student</h6>
//               <p className="text-sm sm:text-base">Find the best students</p>
//             </div>

//             <div className="w-[250px] h-[300px] rounded-lg bg-[#54b670] flex flex-col justify-center items-center text-white">
//               <h6 className="mt-3 text-lg sm:text-xl">Verified Jobs</h6>
//               <p className="text-[#ddd] text-sm sm:text-base">
//                 100% verified and save jobs
//               </p>
//             </div>

//             <div className="w-[250px] h-[300px] rounded-lg bg-blue-500 flex flex-col justify-center items-center text-white">
//               <h6 className="mt-3 text-lg sm:text-xl">Verified Internships</h6>
//               <p className="text-[#ddd] text-sm text-center sm:text-base">
//                 100% verified and save internships
//               </p>
//             </div>
//           </div>

//           {/* Recent Jobs & Internships Section */}
//           <div className="mt-10 text-center">
//             <h1 className="text-xl sm:text-2xl lg:text-3xl text-gray-800 font-medium">
//               Recent Job Openings
//             </h1>

//             {/* Responsive Job Card Grid */}
//             <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto mb-6">
//               <Responsivejob data={Jobs} student={student} />
//             </div>

//             <h2 className="text-xl pt-8 sm:text-2xl lg:text-3xl text-gray-800 font-medium">
//               Recent Internship Openings
//             </h2>

//             {/* Responsive Internship Card Grid */}
//             <div className="w-full max-w-[95%] md:max-w-[1150px] mx-auto">
//               <Responsive data={Internships} student={student} />
//             </div>
//           </div>

//           {/* View All Button */}
//           <div className="mt-5 sm:mt-10 pb-10 p-9 text-center">
//             <Link
//               href="/Studentlogin"
//               className="px-5 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               View All
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
