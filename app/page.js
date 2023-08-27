import Container from "./components/Container";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="relative max-h-screen">
        <Container />
      </main>
    </NextUIProvider>
  );
}
