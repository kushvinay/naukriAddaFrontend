

import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment/moment";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Biginterncard = ({ key, data }) => {
  return (
    <Link href={`/Student/Internships/${data?._id}`}>
      <div className="w-full md:w-[600px] lg:w-[650px] mx-auto text-start px-4 py-5 md:px-8 rounded-xl border border-gray-150 hover:border-gray-200 hover:shadow-md my-2 shadow-sm transition duration-200 ease-in-out">
        {data && data?.isActice ? (
          <button className="border-[1px] border-red-400 p-1 rounded text-sm">
            Not Active
          </button>
        ) : (
          <button className="border-[1px] border-gray-300 p-1 rounded text-sm">
            Actively Hiring
          </button>
        )}

        <div className="flex flex-col md:flex-row justify-between border-b-[1px] pb-4 mt-4 mb-1">
          <div>
            <h4 className="text-lg md:text-xl text-black">
              {data && data?.profile}
            </h4>
            <p className="text-sm text-gray-600">
              {data && data?.employe?.organisationname}
            </p>
          </div>
          {data?.employe?.organisationlogo?.url && (
            <Image
              src={data?.employe?.organisationlogo?.url}
              height={50}
              width={50}
              alt="Organisation Logo"
              className="hidden md:block"
            />
          )}
        </div>

        <h6 className="text-gray-600 mb-1 mt-3">
          <MapPinIcon className="h-4 inline-block" />{" "}
          {data.location ? data.location : "Remote"}
        </h6>

        <div className="flex flex-wrap text-sm pb-3">
          <div className="me-5">
            <h6 className="text-gray-700">Stipend</h6>
            <h6 className="text-gray-600">{data?.Stipend?.amount} rs</h6>
          </div>
          <div className="me-5">
            <h6 className="text-gray-700">Duration</h6>
            <h6 className="text-gray-600">{data?.duration}</h6>
          </div>
        </div>

        <div className="border-b-[1px] pb-2">
          <p className="text-xs text-green-600 bg-green-100 inline-block p-[2px] rounded">
            {moment(data?.createdAt).fromNow()}
          </p>
        </div>

        <div className="flex justify-end mt-2">
          <button className="text-sky-500 border-[1px] text-sm px-3 py-2 border-sky-500">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Biginterncard;
