'use client';
import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Window from "../components/Window";

function Page() {
  const [frases, setFrases] = useState([]);
  const [frase, setFrase] = useState(null);

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const generateFrase = () => {
    const num = getRandomInt(0, frases.length);
    const frase = frases[num];
    const newFrases = frases.splice(num, 1);
    setFrase(frase);
    return frase;
  };

  const listasFrases = useEffect(() => {
    fetch("/iNeverNever.json")
      .then((res) => res.json())
      .then((res) => setFrases(res));
    generateFrase();
  }, []);

  return (
    <main className="relative max-h-screen">
      <Container noIndex={true}>
        <Window title="I never, never">
          {frases?.length > 0 ? (
            <div className="flex justify-center items-center flex-col h-full text-center">
              <h1
                className="leading-loose text-2xl md:text-4xl font-semibold mx-4 pb-5 "
                style={{ lineHeight: "3rem" }}
              >
                {frase}
              </h1>

              <button
                type="button"
                onClick={() => {
                  generateFrase();
                }}
                className="text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800"
              >
                {frase === undefined
                  ? "Generate Never, Never"
                  : "Generate other"}
              </button>
            </div>
          ) : frase ? (
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t hi px-4 py-2">
                The Never Nevers are over!
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <p>Remember that you can contact me to add more phrases.</p>
              </div>
            </div>
          ) : null}
        </Window>
      </Container>
    </main>
  );
}

export default Page;
