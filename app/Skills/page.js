"use client";
import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import Image from "next/image";
import dynamic from 'next/dynamic'
import SkillsSkeletoon from "../Skeletoon/SkillsSkeletoon";

const DynamicWindowSection = dynamic(
  () => import("../components/WindowSection"),
  {
    loading: () => (
      <SkillsSkeletoon />
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
