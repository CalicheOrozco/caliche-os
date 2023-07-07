import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'
import AboutSkeletoon from "../Skeletoon/AboutSkeletoon";

const DynamicWikipediaProfile = dynamic(() => import("../components/WikipediaProfile"), {
  loading: () => (
    <AboutSkeletoon />
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
