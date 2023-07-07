import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'
import ExperencieSkeletoon from "../Skeletoon/ExperencieSkeletoon";

const DynamicExperienceCard = dynamic(() => import("../components/ExperienceCard"), {
  loading: () => (
    <ExperencieSkeletoon />
  ),
});



export default function Home() {


  
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
      <Window title="Experience">
        {myData.experience.map((exp, key) => (
          <DynamicExperienceCard
          companyName={exp.company}
          jobTitle={exp.title}
          description={exp.desc}
          imageUrl={exp.icon}
          startDate={exp.startDate}
          endDate={exp.endDate}
          location={exp.location}
          link={exp.companyLink}
          skills={exp.skills}
          key={key}
        />
          ))}
      </Window>

    </Container>
    </main>
  );
}
