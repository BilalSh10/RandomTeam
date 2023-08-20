"use client";
import { useState } from "react";
import Image from "next/image";
import Teams from "./Teams.json";
import Lottie from "lottie-react";
import animationData from "./animation_lljjzvj3.json";

function getRandomTeam(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Teams.length);
      let randomTeam = Teams[randomIndex];
      resolve(randomTeam);
    }, delay);
  });
}

export default function Home() {
  const [firstTeam, setFirstTeam] = useState(Teams[0]);
  const [secondTeam, setSecondTeam] = useState(Teams[0]);

  async function setRandomTeam() {
    setFirstTeam("");
    let randomTeam = await getRandomTeam(2000);
    setFirstTeam(randomTeam);
  }

  async function setSecondRandomTeam() {
    setSecondTeam("");
    let randomTeam = await getRandomTeam(2000);
    setSecondTeam(randomTeam);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="text-lg font-bold">Choose Your Team</h1>
      <div className="flex flex-col items-center gap-16 p-10 mt-4">
        <div
          className="flex flex-col items-center rounded-md gap-6"
          id="FirstTeam"
        >
          <h1 className="bg-black w-56 p-1 text-center text-white rounded-md">
            {firstTeam.name}
          </h1>
          {firstTeam !== "" ? (
            <>
              <Image
                height="200"
                width="200"
                className="h-44 w-auto"
                src={firstTeam.picture}
                alt="FirstPic"
              />
            </>
          ) : (
            <>
              <Lottie className="h-64 w-auto" animationData={animationData} />
            </>
          )}
          <button
            className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg"
            onClick={setRandomTeam}
          >
            Random Pick
          </button>
        </div>
        <div className="flex flex-col items-center gap-6" id="SecondTeam">
          <h1 className="bg-black w-56 text-center text-white rounded-md p-1">
            {secondTeam.name}
          </h1>
          {secondTeam !== "" ? (
            <>
              <Image
                height="200"
                width="200"
                className="h-44 w-auto"
                src={secondTeam.picture}
                alt="FirstPic"
              />
            </>
          ) : (
            <>
              <Lottie className="h-64 w-auto" animationData={animationData} />
            </>
          )}
          <button
            className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg"
            onClick={setSecondRandomTeam}
          >
            Random Pick
          </button>
        </div>
      </div>
    </main>
  );
}
