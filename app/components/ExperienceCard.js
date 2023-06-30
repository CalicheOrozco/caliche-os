import Link from "next/link";
import React from "react";

const ExperienceCard = ({
  companyName,
  jobTitle,
  description,
  imageUrl,
  startDate,
  endDate,
  location,
  link,
  skills
}) => {
  return (
    <>
      <div className="bg-white rounded-lg  p-3 flex">
        <div className="pr-5">
        <Link href={link}>
          <img src={imageUrl} alt={companyName} className=" w-40 h-30 sm:w-16 sm:h-16 mr-4" />
        </Link>
        </div>
        <div>
          <h3 className="text-xl font-bold">{jobTitle}</h3>
          <Link href={link}>
          <p className="text-lg">{companyName}</p>
          </Link>
          <p className="text-gray-600 text-sm">
            {startDate} - {endDate}
          </p>
          <p className="text-gray-600 mb-4 text-sm">{location}</p>
          <div className="flex flex-col flex-grow">
          {description.map((item, index) => (
            <p key={index} className="text-gray-700 text-base">
              {item}
            </p>
          ))}
          </div>
          {skills && (
            <p className="text-gray-800 py-2">{`Skills: ${skills}`}</p>
          )}
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    </>
  );
};

export default ExperienceCard;
