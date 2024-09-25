
"use client";
import React, { useState, useEffect } from "react";
import Model from "@/components/model";
import AddSecEdu from "@/app/components/AddSecEdu";
import AddSenSecEdu from "@/app/components/AddSenSecEdu";
import AddGraduation from "@/app/components/AddGraduation";
import Addjobs from "@/app/components/Addjobs";
import Addinternship from "@/app/components/Addinternship";
import Addposition from "@/app/components/Addposition";
import Addtraning from "@/app/components/Addtraning";
import Addprojects from "@/app/components/Addprojects";
import Addskill from "@/app/components/Addskill";
import Addaditional from "@/app/components/Addaditional";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { TrashIcon } from "@heroicons/react/24/outline";
import { asynDeletEducationRes, asynDeletInternshipRes, asynDeletaccomplishmentsRes, asynDeletcoursesRes, asynDeletjobRes, asynDeletprojectsRes, asynDeletresponsibilitiesRes, asynDeletskillsRes } from "@/Store/Actions/StudentActions";
import { useRouter } from "next/navigation";

const EditResume = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, student } = useSelector((state) => state.StudentSlice);

  let [isMounted, setIsMounted] = useState(false);
  let [showeducation, setshoweducation] = useState(false);
  let [addsecondaryedu, setaddsecondaryedu] = useState(false);
  let [addsensecondaryedu, setaddsensecondaryedu] = useState(false);
  let [addgraduationedu, setaddgraduationedu] = useState(false);
  let [addjob, setaddjob] = useState(false);
  let [addintern, setaddintern] = useState(false);
  let [addpositions, setaddpositions] = useState(false);
  let [addtraningres, setaddtraningres] = useState(false);
  let [addproject, setaddproject] = useState(false);
  let [addskill, setaddskill] = useState(false);
  let [addaditional, setaddaditional] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  let isgradutionEmpty = !student?.resume?.education || Object.keys(student?.resume?.education).length === 0;

  let graedu = null;
  let senedu = null;
  let higedu = null;

  if (student?.resume?.education?.length > 0) {
    graedu = student.resume.education.find((edu) => edu.type === "Graduation");
    senedu = student.resume.education.find((edu) => edu.type === "Seneducation");
    higedu = student.resume.education.find((edu) => edu.type === "Higher");
  }

  const Deletjob = (id) => {
    dispatch(asynDeletjobRes(id));
  };
  const DeletInternship = (id) => {
    dispatch(asynDeletInternshipRes(id));
  };
  const Deletedu = (id) => {
    dispatch(asynDeletEducationRes(id));
  };
  const Deletresponsibilities = (id) => {
    dispatch(asynDeletresponsibilitiesRes(id));
  };
  const Deletprojects = (id) => {
    dispatch(asynDeletprojectsRes(id));
  };
  const Deletskill = (id) => {
    dispatch(asynDeletskillsRes(id));
  };
  const Deletcourses = (id) => {
    dispatch(asynDeletcoursesRes(id));
  };
  const Deletaccomplishments = (id) => {
    dispatch(asynDeletaccomplishmentsRes(id));
  };

  return (
    <div className="w-full max-w-[900px] mx-auto p-4 sm:p-8">
      <h1 className="text-3xl text-center py-5 pt-14 font-medium text-gray-600 mb-2">
        Resume
      </h1>
      <div className="w-full h-auto border-[1px] border-inherit p-4 flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold pb-1">
            {student ? student.fullname : "Full Name"}
          </h3>
          <h4 className="text-gray-500 text-sm pb-1">{student ? student.email : "Email not available"}</h4>
          <h4 className="text-gray-500 text-sm pb-1">{student ? `+91-${student.contact}` : "Contact not available"}</h4>
        </div>
        <div className="mt-4 sm:mt-0">
          {student?.avatar?.url ? (
            <Image
              src={student.avatar.url}
              height={100}
              width={100}
              alt="Profile Avatar"
              className="object-cover rounded-full"
            />
          ) : (
            <div className="bg-gray-300 w-24 h-24 flex items-center justify-center rounded-full">
              <span>No Image</span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit px-5 py-7">
        <h4 className="text-gray-500 text-sm mb-4">EDUCATION</h4>
        <div className="space-y-4">
          {graedu != null && (
            <div className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">
                  {graedu.degree} in {graedu.Stream}
                </h4>
                <h5 className="text-sm text-gray-500">{graedu.college}</h5>
                <h5 className="text-sm text-gray-500">
                  {graedu.startyear} - {graedu.endyear}
                </h5>
                <h5 className="text-sm text-gray-500">
                  Percentage: {graedu.performance}
                </h5>
              </div>
              <TrashIcon onClick={() => Deletedu(graedu.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          )}
          {graedu == null && (
            <button
              className="block py-1 text-sky-500"
              onClick={() => setaddgraduationedu(true)}
            >
              + Add graduation/post graduation
            </button>
          )}

          {senedu != null && (
            <div className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">
                  Higher Secondary Education (XII), {senedu.Stream}
                </h4>
                <h5 className="text-sm text-gray-500">{senedu.school}</h5>
                <h5 className="text-sm text-gray-500">Board: {senedu.board}</h5>
                <h5 className="text-sm text-gray-500">
                  Year of completion: {senedu.endyear}
                </h5>
                <h5 className="text-sm text-gray-500">
                  Percentage: {senedu.performance}
                </h5>
              </div>
              <TrashIcon onClick={() => Deletedu(senedu.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          )}
          {senedu == null && (
            <button
              className="block py-1 text-sky-500"
              onClick={() => setaddsensecondaryedu(true)}
            >
              + Add Higher Secondary Education
            </button>
          )}

          {higedu != null && (
            <div className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">High School (X)</h4>
                <h5 className="text-sm text-gray-500">{higedu.school}</h5>
                <h5 className="text-sm text-gray-500">Board: {higedu.board}</h5>
                <h5 className="text-sm text-gray-500">
                  Year of completion: {higedu.endyear}
                </h5>
                <h5 className="text-sm text-gray-500">
                  Percentage: {higedu.performance}
                </h5>
              </div>
              <TrashIcon onClick={() => Deletedu(higedu.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          )}
          {higedu == null && (
            <button
              className="block py-1 text-sky-500"
              onClick={() => setaddsecondaryedu(true)}
            >
              + Add Secondary Education
            </button>
          )}
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">EXPERIENCE</h4>
        <div className="space-y-4">
          {student?.resume?.jobs?.map((job, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">{job.profile}</h4>
                <h5 className="text-sm text-gray-500">{job.organization}</h5>
                <h4 className="text-sm text-gray-500"> {job.location}</h4>
                <h5 className="text-sm text-gray-500">{job.startdate} - {job.enddate}</h5>
                <p className="text-sm text-gray-500">{job.description}</p>
              </div>
              <TrashIcon onClick={() => Deletjob(job.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddjob(true)}
          >
            + Add Job Experience
          </button>
        </div>
      </div>


      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">INTERNSHIPS</h4>
        <div className="space-y-4">
          {student?.resume?.internships?.map((internship, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">{internship.profile}</h4>
                <h5 className="text-sm text-gray-500">{internship.organization}</h5>
                <h4 className="text-sm text-gray-500"> {internship.location}</h4>
                <h5 className="text-sm text-gray-500">{internship.startdate} - {internship.enddate}</h5>
                <p className="text-sm text-gray-500"> {internship.description}</p>
              </div>
              <TrashIcon onClick={() => DeletInternship(internship.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddintern(true)}
          >
            + Add Internship Experience
          </button>
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">POSITIONS OF RESPONSIBILITY</h4>
        <div className="space-y-4">
          {student?.resume?.responsibilities?.map((responsibilitie, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                {/* <h4 className="text-sm font-semibold">{position.title}</h4> */}
                {responsibilitie.description}
                {/* <h5 className="text-sm text-gray-500">{position.startyear} - {position.endyear}</h5> */}
              </div>
              <TrashIcon onClick={() => Deletresponsibilities(responsibilitie.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddpositions(true)}
          >
            + Add Position of Responsibility
          </button>
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">TRAININGS</h4>
        <div className="space-y-4">
          {student?.resume?.courses?.map((course, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">{course.training}</h4>
                <h5 className="text-sm text-gray-500">{course.organization}</h5>
                <h4 className="text-sm text-gray-500">
                      {course.startDate}{" - "}{course.endDate}{" "}                   
                        </h4>
                <h5 className="text-sm text-gray-500">{course.location}</h5>
                <p className="text-sm text-gray-500">{course.description}</p>
              </div>
              <TrashIcon onClick={() => Deletcourses(course.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddtraningres(true)}
          >
            + Add Training Experience
          </button>
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">PROJECTS</h4>
        <div className="space-y-4">
          {student?.resume?.projects?.map((project, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">{project.title}</h4>
                <a target="_blank" className="text-sm text-blue-700 " href={project.url}>Project link</a>
                <h5 className="text-sm text-gray-500">{project.description}</h5>
              </div>
              <TrashIcon onClick={() => Deletprojects(project.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddproject(true)}
          >
            + Add Project
          </button>
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">SKILLS</h4>
        <div className="space-y-4">
          {student?.resume?.skills?.map((skill, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                <h4 className="text-sm font-semibold">{skill.skill}</h4>
                <h5 className="text-sm text-gray-500">Proficiency: {skill.level}</h5>
              </div>
              <TrashIcon onClick={() => Deletskill(skill.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddskill(true)}
          >
            + Add Skill
          </button>
        </div>
      </div>

      <div className="w-full border-[1px] border-inherit p-5 mt-5">
        <h4 className="text-gray-500 text-sm mb-4">ADDITIONAL INFORMATION</h4>
        <div className="space-y-4">
          {student?.resume?.accomplishments?.map((accomplishment, index) => (
            <div key={index} className="flex justify-between flex-wrap">
              <div className="max-w-[75%]">
                {/* <h4 className="text-sm font-semibold">{additional.title}</h4> */}
                <h5 className="text-sm text-gray-500">{accomplishment.description}</h5>
              </div>
              <TrashIcon onClick={() => Deletaccomplishments(accomplishment.id)} className="h-5 mt-2 cursor-pointer" />
            </div>
          ))}
          <button
            className="block py-1 text-sky-500"
            onClick={() => setaddaditional(true)}
          >
            + Add Additional Information
          </button>
        </div>
      </div>


      <Model
        isVisible={showeducation}
        onClose={() => {
          setshoweducation(false);
        }}
      />
      <AddSenSecEdu
        isVisible={addsensecondaryedu}
        onClose={() => {
          setaddsensecondaryedu(false);
        }}
      />
      <AddSecEdu
        isVisible={addsecondaryedu}
        onClose={() => {
          setaddsecondaryedu(false);
        }}
      />
      <AddGraduation
        isVisible={addgraduationedu}
        onClose={() => {
          setaddgraduationedu(false);
        }}
      />
      <Addjobs
        isVisible={addjob}
        onClose={() => {
          setaddjob(false);
        }}
      />
      <Addinternship
        isVisible={addintern}
        onClose={() => {
          setaddintern(false);
        }}
      />
      <Addposition
        isVisible={addpositions}
        onClose={() => {
          setaddpositions(false);
        }}
      />
      <Addtraning
        isVisible={addtraningres}
        onClose={() => {
          setaddtraningres(false);
        }}
      />
      <Addprojects
        isVisible={addproject}
        onClose={() => {
          setaddproject(false);
        }}
      />
      <Addskill
        isVisible={addskill}
        onClose={() => {
          setaddskill(false);
        }}
      />
      <Addaditional
        isVisible={addaditional}
        onClose={() => {
          setaddaditional(false);
        }}
      />

      <div className="w-full flex pt-5 justify-center items-center">

        <Link className=" px-3 py-2 mb-8 rounded-lg bg-sky-600 text-white" href="/Student/showResume">View Resume</Link>
      </div>

    </div>



  );
};

export default EditResume;
