// "use client";
// import {
//   asynUpdateAvatar,
//   asyncCurrentUser,
// } from "@/Store/Actions/StudentActions";
// import Image from "next/image";
// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import Card from "@/app/components/Card";
// import Internshipcard from "@/app/components/intershipCard";
// import { Slide } from "react-toastify";
// import Responsive from "@/app/components/slick";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const Acticeinput = (e) => {
//     e.preventDefault();
//     const avatarinp = document.getElementById('avatarinp');
//     avatarinp.click();
//   }

//   let { isAuthenticated, student } = useSelector((state) => state.StudentSlice);
//   useEffect(() => {
//     if(!isAuthenticated) dispatch(asyncCurrentUser())
//     .then(() => {
//     })
//     .catch((error) => {
//       console.error('Authentication error:', error);
//       router.push('/Studentlogin');
//     });
//   }, [isAuthenticated]);

//   const UploadAvatar = (e) => {
//     e.preventDefault();
//     const formdata = new FormData(e.target);
//     console.log(e.target.avatar.files[0]);
//     formdata.set("avatar", e.target.avatar.files[0]);
//     console.log(formdata);
//     dispatch(asynUpdateAvatar(formdata));
//   };
//   return (
//     <div className="py-10 ">
//       <div className="w-[900px] m-auto border-[1px] border-inherit bg-slate-200 rounded-lg">
//         <h1 className="text-3xl text-center py-5  font-medium text-gray-700 ">
//           Profile
//         </h1>
//         {student && (
//           <Image
//             className="m-auto rounded-sm"
//             src={student && student.avatar.url}
//             height={140}
//             width={140}
//             onClick={Acticeinput}
//           ></Image>
//         )}
//         <p className="text-[8px] text-center mb-1">Click on Profile for Upload  </p>
//         <form className="m-auto w-full flex items-center justify-center " onSubmit={UploadAvatar} encType="multipart/form-data">
//           <input className="hidden" type="file" name="avatar" id="avatarinp" />
//           <button className=" border border-black bg-gray-800 text-white px-2 rounded-sm mt-1" type="Submit">Update</button>
//         </form>
//         {student && (
//           <h1 className="text-center text-2xl text-gray-800 ">
//             {student.firstname} {student.lastname}{" "}
//           </h1>
//         )}
//       {student &&
//       <div className="pt-3">
//         <h2 className="text-3xl text-gray-800 text-center border-t-[1px] py-3">Applied Jobs</h2>
//         <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide">

//         {student.internships.length === 0 ? <h3 className="text-xl text-gray-500 m-auto py-2 text-center"> You have not applied for any Jobs yet!</h3>
//         : <div className="flex  px-4 ">
//         {student && 
//         student.jobs.map((job) => (
//           <div  key={job._id} className="px-2 pb-3">
//             <Card data={job}/>
//           </div>
//         ))
//       }
//       </div>
//         }
//         </div>
//       </div>}
//       {student &&
//       <div className="pt-5 ">
//         <h2 className="text-3xl text-gray-700 text-center py-3 border-t-[1px]">Applied Internships</h2>
//         <div className="whitespace-nowrap overflow-x-scroll scrollbar-hide ">

//         {student.internships.length === 0 ? <h3 className="text-xl text-gray-500 text-center py-3"> You have not applied for any Internships yet!</h3>
//         : <div className="flex  px-4 ">
//         {student && 
//         student.internships.map((internship) => (
//           <div  key={internship._id}  className="px-2 pb-10">
//             <Internshipcard data={internship}/>
//           </div>
//         ))
//       }
//       </div>
//         }
//         </div>
//       </div>}
//       </div>
//     </div>
//   );
// };

// export default Profile;

"use client";
import {
  asynUpdateAvatar,
  asyncCurrentUser,
} from "@/Store/Actions/StudentActions";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Card from "@/app/components/Card";
import Internshipcard from "@/app/components/intershipCard";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const activateInput = (e) => {
    e.preventDefault();
    const avatarInput = document.getElementById("avatarinp");
    avatarInput.click();
  };

  let { isAuthenticated, student } = useSelector((state) => state.StudentSlice);
  useEffect(() => {
    if (!isAuthenticated)
      dispatch(asyncCurrentUser())
        .then(() => {})
        .catch((error) => {
          console.error("Authentication error:", error);
          router.push("/Studentlogin");
        });
  }, [isAuthenticated]);

  const uploadAvatar = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.set("avatar", e.target.avatar.files[0]);
    dispatch(asynUpdateAvatar(formData));
  };

  return (
    <div className="py-10 px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto bg-slate-200 border border-gray-300 rounded-lg p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-medium text-center text-gray-700 mb-6">
          Profile
        </h1>

        {student && (
          <div className="flex flex-col items-center justify-center">
            <Image
              className="rounded-full cursor-pointer"
              src={student?.avatar?.url || "/default-avatar.png"}
              height={140}
              width={140}
              onClick={activateInput}
              alt="Profile Picture"
            />
            <p className="text-xs text-center mt-2">Click on profile to upload</p>

            <form
              className="mt-4"
              onSubmit={uploadAvatar}
              encType="multipart/form-data"
            >
              <input className="hidden" type="file" name="avatar" id="avatarinp" />
              <button
                className="border  bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                type="Submit"
              >
                Update
              </button>
            </form>

            <h1 className="text-xl md:text-2xl font-semibold text-center mt-4">
              {student.firstname} {student.lastname}
            </h1>
          </div>
        )}

        {/* Applied Jobs Section */}
        {student && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-t border-gray-300 pt-4 text-center">
              Applied Jobs
            </h2>
            {student.jobs.length === 0 ? (
              <h3 className="text-lg text-gray-500 text-center mt-4">
                You have not applied for any Jobs yet!
              </h3>
            ) : (
              <div className="flex overflow-x-auto whitespace-nowrap gap-4 py-4 scrollbar-hide">
                {student.jobs.map((job) => (
                  <div key={job._id} className="w-[250px]">
                    <Card data={job} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Applied Internships Section */}
        {student && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 border-t border-gray-300 pt-4 text-center">
              Applied Internships
            </h2>
            {student.internships.length === 0 ? (
              <h3 className="text-lg text-gray-500 text-center mt-4">
                You have not applied for any Internships yet!
              </h3>
            ) : (
              <div className="flex overflow-x-auto whitespace-nowrap gap-4 py-4 scrollbar-hide">
                {student.internships.map((internship) => (
                  <div key={internship._id} className="w-[250px]">
                    <Internshipcard data={internship} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
