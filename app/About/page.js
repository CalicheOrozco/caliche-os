import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'

const DynamicWikipediaProfile = dynamic(() => import("../components/WikipediaProfile"), {
  loading: () => (
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
  ),
}
);


export default function Home() {
  const name = "Caliche Orozco";
  const imageSrc = "/avatar.jpg";
  const description = [
  "Caliche Orozco is a skilled middle-level front-end developer with a focus on creating responsive web designs and mobile apps for startups. With expertise in technologies like React, TailwindCSS, Next.js, TypeScript, and GraphQL, Caliche is dedicated to delivering high-quality, efficient, and scalable solutions to meet user needs. They have collaborated with interdisciplinary teams across diverse industries, including education, consulting, and foreign trade, contributing to the development of web products and improving website performance. Caliche's proficiency in UX/UI best practices, agile methodologies, and reusable code development showcases their commitment to excellence. Fluent in English and driven by continuous learning, Caliche is a valuable asset for clients seeking impactful front-end development.",
  "If you are searching for an experienced and detail-oriented front-end developer who prioritizes quality, Caliche Orozco is the ideal candidate. Their expertise, combined with their ability to work effectively with international teams, ensures the delivery of exceptional digital solutions. Don't hesitate to reach out to Caliche to discuss your project requirements and explore how they can contribute to your success.",
];
  

  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
        <Window title="About">
        <DynamicWikipediaProfile name={name} imageSrc={imageSrc} description={description} role={myData.designation} currentJob={myData.about.currentCompany} currentProject={myData.about.currentProject} education={myData.about.education} languages={myData.about.languages} />
        </Window>
      </Container>
    </main>
  );
}
