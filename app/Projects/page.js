import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'

const DynamicCard = dynamic(() => import('../components/Card'), {
  loading: () => (
    <div className="animate-pulse flex flex-col gap-4 lg:p-10 h-screen items-center justify-center">
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
      <div className=" bg-slate-700 h-40 w-80"></div>
    </div>
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
