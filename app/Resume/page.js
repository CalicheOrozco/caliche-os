import Container from "../components/Container";
import Window from "../components/Window";

export default function Home() {
  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
      <Window title="Resume" noPadding={true} backgroundColor="bg-[#2a2a2e]">
      <div className="h-full">
        <object
          data="/CVCaliche.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </div>
      </Window>

    </Container>
    </main>
  );
}
