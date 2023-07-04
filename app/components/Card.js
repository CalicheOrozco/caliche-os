
import React from "react";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";

const Card = (props) => {
  const { title, github, imgUrl, link } = props;
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="object-cover">
        <a href={link} target="_blank" className="w-full block shadow-2xl">
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            className="transform lg:hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            width={500}
            height={300}
          />
        </a>
      </div>
      <a href={github} target="_blank" className="w-full block shadow-2xl">
        <h1 className="absolute flex items-center top-5 right-2 text-gray-50 font-bold text-xl bg-green-600 hover:bg-green-800 rounded-lg px-2">
          <BsGithub className="inline-block mx-2" />
          {title}
        </h1>
      </a>
    </div>
  );
};

export default Card;
