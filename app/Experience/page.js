import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import dynamic from 'next/dynamic'

const DynamicExperienceCard = dynamic(() => import("../components/ExperienceCard"), {
  loading: () => (
    <div className=" animate-pulse">
      <div className="bg-white rounded-lg p-3 flex">
        <div>
          <div className="bg-gray-300 w-16 h-16 mr-4"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 mb-2 w-40"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>

          <div className="h-40 bg-gray-300 my-2 w-96"></div>
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <div className="bg-white rounded-lg p-3 flex">
        <div>
          <div className="bg-gray-300 w-16 h-16 mr-4"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 mb-2 w-40"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>

          <div className="h-40 bg-gray-300 my-2 w-96"></div>
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <div className="bg-white rounded-lg p-3 flex">
        <div>
          <div className="bg-gray-300 w-16 h-16 mr-4"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 mb-2 w-40"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>

          <div className="h-40 bg-gray-300 my-2 w-96"></div>
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <div className="bg-white rounded-lg p-3 flex">
        <div>
          <div className="bg-gray-300 w-16 h-16 mr-4"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 mb-2 w-40"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>

          <div className="h-40 bg-gray-300 my-2 w-96"></div>
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
      <div className="bg-white rounded-lg p-3 flex">
        <div>
          <div className="bg-gray-300 w-16 h-16 mr-4"></div>
        </div>
        <div>
          <div className="h-6 bg-gray-300 mb-2 w-40"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>
          <div className="h-4 bg-gray-300 mb-2 w-20"></div>

          <div className="h-40 bg-gray-300 my-2 w-96"></div>
        </div>
      </div>
      <div className="p-1">
        <div className="h-px bg-gray-300 flex-1"></div>
      </div>
    </div>
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
