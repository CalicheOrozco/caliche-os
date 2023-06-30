"use client";
import Container from "../components/Container";
import Window from "../components/Window";
import WindowSection from "../components/WindowSection";
import myData from "@/constants/data";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Container noIndex={true}>
        <Window title="Skills">
          <p>
            {myData.skills.description}
          </p>
          <WindowSection title={"Programming Languages"}>
            {
              myData.skills.languages.map((language) => (
                <li>
              <div
                className={`flex flex-col items-center p-2 rounded-md hover:bg-[#010081] hover:text-white`}
              >
                <img
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
          </WindowSection>
          <WindowSection title={"Libraries"}>
            {
              myData.skills.libraries.map((librery) => (
                <li>
              <div
                className={`flex flex-col items-center p-2 rounded-md hover:bg-[#010081] hover:text-white`}
              >
                <img
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
          </WindowSection>
          <WindowSection title={"Frameworks"}>
            {
              myData.skills.frameworks.map((item) => (
                <li>
              <div
                className={`flex flex-col items-center p-2 rounded-md hover:bg-[#010081] hover:text-white`}
              >
                <img
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
          </WindowSection>
        </Window>
      </Container>
    </main>
  );
}
