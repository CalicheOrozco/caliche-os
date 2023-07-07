import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'
import ProjectSkeletoon from "../Skeletoon/ProjectSkeletoon";

const DynamicCard = dynamic(() => import('../components/Card'), {
  loading: () => (
    <ProjectSkeletoon />
  ),
})


export default function Home() {
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
      <Window title="Projects">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {myData.projects.map((proj, key) => (
            <DynamicCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              github={proj.github} 
              key={key}
            />
          ))}
        </div>
      </Window>

    </Container>
    </main>
  );
}
