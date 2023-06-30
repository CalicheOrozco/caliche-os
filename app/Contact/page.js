import Link from "next/link";
import Container from "../components/Container";
import Window from "../components/Window";
import WindowSection from "../components/WindowSection";
import myData from "@/constants/data";
import Image from "next/image";


export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Container noIndex={true}>
      <Window title="Contact">
      <WindowSection title={"Social Media"}>
            {
              myData.socialLinks.map((item, key) => (
                <li key={`Contact-${key}`}>
              <Link href={item.url}>
              <div 
                className={`flex flex-col items-center p-2 rounded-md hover:bg-[#010081] hover:text-white`}
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
          </WindowSection>
      </Window>

    </Container>
    </main>
  );
}
