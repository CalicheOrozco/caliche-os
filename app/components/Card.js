
import React from "react";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
  const { title, github, imgUrl, link } = props;
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="object-cover">
        
        <Link href={link} target="_blank" className="w-full block shadow-2xl">
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            className="transform lg:hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
            width={300}
            height={50}
          />
        </Link>
      </div>
      <Link href={github} target="_blank" className="w-full block shadow-2xl">
        <h1 className="absolute flex items-center top-5 right-2 text-gray-50 font-bold text-xl bg-green-600 hover:bg-green-800 rounded-lg px-2">
          <BsGithub className="inline-block mx-2" />
          {title}
        </h1>
      </Link>
    </div>
  );
};

export default Card;
