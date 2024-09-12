
"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asyncRemoveEmploye } from "@/Store/Actions/EmployeAction";
import { useRouter } from "next/navigation";




const Employenav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated,employe } = useSelector((state) => state.EmployeSlice);
  const router = useRouter();

    useEffect(() => {
    if(!isAuthenticated) router.push("/Employesignin")
    // if (isAuthenticated) router.push("/Student/StudentHome");
    
  }, [isAuthenticated]);


  const changeProfileDropdown = () => { 
        setProfileDropdown(!profileDropdown);
      };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdown(!profileDropdown);
  };

  const employesignout = async () => {
    const res = await dispatch(asyncRemoveEmploye());
    console.log(res);

    if (res.success) {
      router.push("/");
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/Employe/EmployeHome" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl text-blue-500 font-semibold whitespace-nowrap dark:text-white">
            NaukriAdda
          </span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-multi-level"
          aria-expanded={isMobileMenuOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className={`${isMobileMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/Employe/internships" className="block py-2 px-3 text-blue-500 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">
                Internship
              </Link>
            </li>
            
            <li>
              <Link href="/Employe/jobs" className="text-blue-500 block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Job
              </Link>
            </li>

            {/* Job Seekers Dropdown */}
            <li className="relative">
              <button
                onClick={toggleProfileDropdown}
                onMouseEnter={changeProfileDropdown}
                id="dropdownNavbarLink"
                className="flex items-center text-blue-500 justify-between w-full py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Employe
                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown content */}
              {profileDropdown && (
                <div
                onMouseLeave={changeProfileDropdown}
                  id="dropdownNavbar"
                  className="z-10 absolute right-0 mt-2 w-full sm:w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                      <Link href="/Employe/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      
                      <img
                        className="h-7 w-7 rounded-full mr-2"
                       src={employe.organisationlogo.url} alt=""
                      
                      />  
                      <span>{employe && employe.fullname}</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Employe/CreateInternship" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Create Internship
                      </Link>
                    </li>
                    <li>
                      <Link href="/Employe/CreateJob" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Create Job
                      </Link>
                    </li>
                    <li>
                      <Link href="/Employe/changepassword" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Chang Password
                      </Link>
                    </li>
                    <li>
                      <Link href="/Employe/updateemploye" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <div  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      <p onClick={employesignout}>Logout</p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Employenav;
