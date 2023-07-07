"use client";
import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import Image from "next/image";
import dynamic from 'next/dynamic'

const DynamicWindowSection = dynamic(
  () => import("../components/WindowSection"),
  {
    loading: () => (
      <div className="animate-pulse">
        <div className="flex items-center my-4">
          <div className="mx-4 h-5 w-20 bg-slate-700"></div>
          <div className="h-px bg-slate-700 flex-1"></div>
        </div>
      <div className="flex flex-row gap-2 py-4">
        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>

        <div className="flex flex-col gap-1">
          <div className=" bg-slate-700 h-14 w-14"></div>
          <div className=" bg-slate-700 h-4 w-14"></div>
        </div>
      </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
        <Window title="Skills">
          <p>
            {myData.skills.description}
          </p>
          <DynamicWindowSection title={"Programming Languages"}>
            {
              myData.skills.languages.map((language, index) => (
                <li key={`item-language-${index}`} >
              <div
                className={`flex flex-col items-center p-2 rounded-md lg:hover:bg-[#010081] lg:hover:text-white`}
              >
                <Image 
                  src={language.icon}
                  alt={language.name}
                  width={50}
                  height={50}
                />
                <span>{language.name}</span>
              </div>
            </li>
              ))
            }
          </DynamicWindowSection>
          <DynamicWindowSection title={"Libraries"}>
            {
              myData.skills.libraries.map((librery, index ) => (
                <li key={`item-library-${index}`} >
              <div
                className={`flex flex-col items-center p-2 rounded-md lg:hover:bg-[#010081] lg:hover:text-white`}
              >
                <Image 
                  src={librery.icon}
                  alt={librery.name}
                  width={50}
                  height={50}
                />
                <span>{librery.name}</span>
              </div>
            </li>
              ))
            }
          </DynamicWindowSection>
          <DynamicWindowSection title={"Frameworks"}>
            {
              myData.skills.frameworks.map((item, index) => (
                <li key={`item-${index}`} >
              <div
                className={`flex flex-col items-center p-2 rounded-md lg:hover:bg-[#010081] lg:hover:text-white`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <span>{item.name}</span>
              </div>
            </li>
              ))
            }
          </DynamicWindowSection>
        </Window>
      </Container>
    </main>
  );
}
