import Head from "next/head";
import { Inter } from "@next/font/google";
import { getOptionsForVote } from "../utils/getRandomPokemon";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  //prevent hydration error
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const [first, second] = getOptionsForVote();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen items-center flex flex-col justify-center">
        <div className="text-xl text-center ">
          Which Pokémon is Roundest?
        </div>
        <div className="p-2"></div>
        <div className="flex justify-between border rounded-lg shadow-md max-w-xl">
          <div className="w-16 h-16 p-8 m-8 bg-green-800">
            {first}
          </div>
          <div className="w-16 h-16 p-8 m-8 bg-yellow-800">
            {second}
          </div>
        </div>
      </div>
    </>
  );
}
