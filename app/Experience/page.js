import Container from "../components/Container";
import Window from "../components/Window";
import ExperienceCard from "../components/ExperienceCard";
import myData from "@/constants/data";

export default function Home() {


  
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
      <Window title="Experience">
        {myData.experience.map((exp, key) => (
          <ExperienceCard
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
