
"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { asyncCurrentEmploye, asynUpdateOrganisationlogo } from "@/Store/Actions/EmployeAction";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  let { isAuthenticated, employe } = useSelector((state) => state.EmployeSlice);

  useEffect(() => {
    if (!isAuthenticated)
      dispatch(asyncCurrentEmploye())
        .then(() => {})
        .catch((error) => {
          console.error("Authentication error:", error);
          router.push("/Employesignin");
        });
  }, [isAuthenticated]);

  const Acticeinput = (e) => {
    e.preventDefault();
    const logoinp = document.getElementById("logoinp");
    logoinp.click();
  };

  const UploadAvatar = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("organisationlogo", e.target.organisationlogo.files[0]);
    dispatch(asynUpdateOrganisationlogo(formdata));
  };

  return (
    <div className="py-10 px-4 pt-28 md:px-6 lg:px-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg border border-gray-300 p-6">
        <h1 className="text-2xl md:text-3xl text-center py-5 font-medium text-gray-700">
          Profile
        </h1>

        {employe && (
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full cursor-pointer"
              src={employe.organisationlogo?.url || "/default-avatar.png"}
              height={140}
              width={140}
              alt="Organisation Logo"
              onClick={Acticeinput}
            />
            <form
              className="mt-4 flex flex-col items-center"
              onSubmit={UploadAvatar}
              encType="multipart/form-data"
            >
              <input
                className="hidden"
                type="file"
                name="organisationlogo"
                id="logoinp"
              />
              <button
                className="border bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
                type="Submit"
              >
                Update Logo
              </button>
            </form>

            <h1 className="text-xl md:text-2xl font-semibold text-center mt-4">
              {employe.fullname}
            </h1>
            <h4 className="text-lg text-gray-600 mt-2">
              Company: {employe.organisationname}
            </h4>
            <p className="text-sm md:text-base text-gray-500 mt-2">
              Internship Post: {employe.internships?.length || 0} | Job Post: {employe.jobs?.length || 0}
            </p>
          </div>
        )}

        {/* Jobs Section (Optional) */}
        {/* Uncomment if needed
        {employe && employe.jobs?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center border-t border-gray-300 pt-4">
              Applied Jobs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {employe.jobs.map((job) => (
                <Card key={job._id} data={job} />
              ))}
            </div>
          </div>
        )}

        {employe && employe.internships?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 text-center border-t border-gray-300 pt-4">
              Applied Internships
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {employe.internships.map((internship) => (
                <Card key={internship._id} data={internship} />
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Profile;
