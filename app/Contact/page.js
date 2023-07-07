import Link from "next/link";
import Container from "../components/Container";
import Window from "../components/Window";
import myData from "@/constants/data";
import Image from "next/image";
import dynamic from 'next/dynamic'
import ContactSkeletoon from "../Skeletoon/ContactSkeletoon";


const DynamicWindowSection = dynamic(
  () => import("../components/WindowSection"),
  {
    loading: () => (
      <ContactSkeletoon />
    ),
  }
);



export default function Home() {
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
      <Window title="Contact">
      <DynamicWindowSection title={"Social Media"}>
            {
              myData.socialLinks.map((item, key) => (
                <li key={`Contact-${key}`}>
              <Link href={item.url}>
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
              </Link>
            </li>
              ))
            }
          </DynamicWindowSection>
      </Window>

    </Container>
    </main>
  );
}
