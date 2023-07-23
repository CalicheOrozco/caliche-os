import React from "react";
import Image from "next/image";


const WikipediaProfile = ({
  name,
  imageSrc,
  description,
  role,
  currentJob,
  currentProject,
  education,
  languages,
}) => {
  return (
    <div className="py-3">
      {/* wikipedia logo */}
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <Image
            src="/icons/wikipedia.png"
            alt="Wikipedia logo"
            className="pb-2"
            width={100}
            height={200}
          />
          <span className="mx-2">
            <Image
              src="/icons/wikipedia2.svg"
              alt="Wikipedia logo title"
              className="pb-2"
              width={100}
              height={200}
            />
            <Image
              src="/icons/wikipedia3.svg"
              alt="Wikipedia logo description"
              className="pb-2"
              width={100}
              height={200}
            />
          </span>
        </div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search Wikipedia..."
            className="px-6 py-2 border border-gray-300 focus:outline-none"
          />
          <button className="px-6 py-2 bg-slate-300 text-black lg:hover:bg-slate-400 focus:outline-none">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center pb-1">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="pb-4">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <div className="flex flex-col items-center xl:items-start xl:flex-row">
        <div className="text-gray-700">
          <ul>
            {description.map((item, index) => (
              <li key={index} className="pb-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-4 sm:w-1/2 xl:w-full p-3 rounded bg-slate-300">
          <h1 className="text-xl text-black font-semibold text-center">
            {name}
          </h1>
          <div className="flex justify-center">
            <Image
              src={imageSrc}
              alt={name}
              className="pb-2"
              width={300}
              height={50}
            />
          </div>
          <div className="text-black text-sm">
            <p>
              <span className="font-bold">Role:</span> {role}
            </p>
            <p>
              <span className="font-bold">Current Job:</span> {currentJob}
            </p>
            <p>
              <span className="font-bold">Project:</span> {currentProject}
            </p>
            <p>
              <span className="font-bold">Education:</span> {education}
            </p>
            <p>
              <span className="font-bold">Languages:</span> {languages}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WikipediaProfile;
