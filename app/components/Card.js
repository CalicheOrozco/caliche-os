"use client";
import React from "react";
import { BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";


const Card = (props) => {
  const { title, github, imgUrl, link, stack } = props;
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="object-cover">
        <Link href={link} target="_blank" className="w-full block shadow-2xl">
          <Image
            src={imgUrl}
            alt={`${title} portfolio`}
            className=" lg:hover:animate-pulse lg:hover:animate-infinite lg:hover:animate-duration-1000 lg:hover:animate-ease-linear lg:hover:animate-alternate object-cover h-full w-full"
            width={300}
            height={50}
          />
        </Link>
      </div>
      <div className="absolute flex justify-center items-center w-full  flex-wrap gap-2 bottom-3 px-1">
        {stack.map((item, key) => (
          <Badge type={item} key={key} />
        ))}
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
