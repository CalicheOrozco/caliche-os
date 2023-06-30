import Container from "../components/Container";
import Window from "../components/Window";
import WikipediaProfile from "../components/WikipediaProfile";
import myData from "@/constants/data";

export default function Home() {
  const name = "Caliche Orozco";
  const imageSrc = "/avatar.jpg";
  const description = [
  "Caliche Orozco is a skilled middle-level front-end developer with a focus on creating responsive web designs and mobile apps for startups. With expertise in technologies like React, TailwindCSS, Next.js, TypeScript, and GraphQL, Caliche is dedicated to delivering high-quality, efficient, and scalable solutions to meet user needs. They have collaborated with interdisciplinary teams across diverse industries, including education, consulting, and foreign trade, contributing to the development of web products and improving website performance. Caliche's proficiency in UX/UI best practices, agile methodologies, and reusable code development showcases their commitment to excellence. Fluent in English and driven by continuous learning, Caliche is a valuable asset for clients seeking impactful front-end development.",
  "If you are searching for an experienced and detail-oriented front-end developer who prioritizes quality, Caliche Orozco is the ideal candidate. Their expertise, combined with their ability to work effectively with international teams, ensures the delivery of exceptional digital solutions. Don't hesitate to reach out to Caliche to discuss your project requirements and explore how they can contribute to your success.",
];
  const details = [
    'Michael Shawn Hickenbottom2​3​ (Chandler, Arizona, 22 de julio de 1965),4​ más conocido como Shawn Michaels, es un luchador profesional estadounidense retirado. Trabajó para la empresa World Wrestling Entertainment como luchador desde 1988 hasta su retiro en 2010,1​ siendo un luchador con una gran trayectoria en la WWE. Tras esto, se dedicó al trabajo tras bastidores en la misma empresa. También trabaja como el embajador de la WWE y hace algunas apariciones ocasionales en la WWE bajo el contrato de Leyenda y en la actualidad desempeña un puesto como vicepresidente del departamento creativo de la WWE desde el año 2022. [cita requerida] Es considerado como uno de los mejores luchadores profesionales de la historia. Se le conoce con el sobrenombre de "The Heartbreak Kid", o simplemente, "HBK". ',
  ];

  return (
    <main className="relative min-h-screen">
      <Container noIndex={true}>
        <Window title="About">
        <WikipediaProfile name={name} imageSrc={imageSrc} description={description} details={details} role={myData.designation} currentJob={myData.about.currentCompany} currentProject={myData.about.currentProject} education={myData.about.education} languages={myData.about.languages} />
        </Window>
      </Container>
    </main>
  );
}
