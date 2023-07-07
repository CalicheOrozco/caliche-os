import React from "react";

function AboutSkeletoon() {
  return (
    <div className="py-3">
      <div className="flex justify-between">
        <div className="bg-gray-300 sanimate-pulse h-20 w-96"></div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            placeholder="Search Wikipedia..."
            className="px-6 py-2 border border-gray-300 focus:outline-none animate-pulse"
          />
          <button className="px-6 py-2 bg-slate-200 text-black hover:bg-slate-400 focus:outline-none animate-pulse">
            Search
          </button>
        </div>
      </div>

      <div className="flex items-center py-3">
        <div className="bg-gray-300 h-12 w-60 animate-pulse"> </div>
      </div>
      <div className="pb-4">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-300 h-96 w-full animate-pulse"></div>
        <div className="ml-4 p-3 rounded bg-slate-300">
          <h1 className="text-xl text-black font-semibold text-center animate-pulse">
            {" "}
          </h1>
          <div className="flex justify-center items-center animate-pulse">
            <div className="bg-gray-200 h-64 w-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSkeletoon;
