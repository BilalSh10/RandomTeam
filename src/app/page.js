"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Teams from "./Data/Teams.json";
import Lottie from "lottie-react";
import animationData from "./animations/animation_lljjzvj3.json";
import ChooseFriend from "./components/ChooseFriend.js";

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
  const [firstResult, setFirstResult] = useState(0);
  const [secondResult, setSecondResult] = useState(0);
  const [firstResultColor, setFirstResultColor] = useState('text-black');
  const [secondResultColor, setSecondResultColor] = useState('text-black');

  useEffect(() => {
    if(firstResult > secondResult){
      setFirstResultColor('text-green-600');
      setSecondResultColor('text-red-600');
    }
    else if(firstResult < secondResult){
      setFirstResultColor('text-red-600');
      setSecondResultColor('text-green-600');
    }
    else{
      setFirstResultColor('text-black');
      setSecondResultColor('text-black');
    }
  }, [firstResult, secondResult]);


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

  function reset(){
    setFirstResult(0);
    setSecondResult(0)
  }

  function addfirstScore(){
    setFirstResult(firstResult+1);
  }

  function addSecondScore(){
    setSecondResult(secondResult+1);
  }
  

  return (
    <main className={`flex min-h-screen flex-col items-center p-8 overflow-x-hidden`}>
      <div className="flex flex-row gap-36">
        <h1 className="text-lg font-bold">الفريق الأول</h1>
        <h1 className="text-lg font-bold">الفريق الثاني</h1>
      </div>
      <div className="flex flex-row items-center gap-2 p-10">
        <div
          className="flex flex-col items-center rounded-md gap-6"
          id="FirstTeam"
        >
          <h1 className={`bg-black w-36 p-1 text-center text-white rounded-md text-sm`}>
            {firstTeam.name}
          </h1>
          {firstTeam !== "" ? (
            <>
              <Image
                height="200"
                width="200"
                className="h-28 w-auto"
                src={firstTeam.picture}
                alt="FirstPic"
              />
            </>
          ) : (
            <>
              <Lottie className="h-36 w-auto" animationData={animationData} />
            </>
          )}
          <button
            className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg"
            onClick={setRandomTeam}
          >
            اختيار عشوائي
          </button>
        </div>
        <div className="flex flex-row gap-4" id="Score">
            <div className={`font-bold text-xl ${firstResultColor}`}>{firstResult}</div>
            <div> _ </div>
            <div className={`font-bold text-xl ${secondResultColor}`}>{secondResult}</div>
        </div>
        <div className="flex flex-col items-center gap-6" id="SecondTeam">
          <h1 className="bg-black w-36 text-center text-white rounded-md p-1 text-sm">
            {secondTeam.name}
          </h1>
          {secondTeam !== "" ? (
            <>
              <Image
                height="200"
                width="200"
                className="h-28 w-auto"
                src={secondTeam.picture}
                alt="FirstPic"
              />
            </>
          ) : (
            <>
              <Lottie className="h-36 w-auto" animationData={animationData} />
            </>
          )}
          <button
            className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg"
            onClick={setSecondRandomTeam}
          >
            اختيار عشوائي
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-10">
        <button onClick={addfirstScore} className="font-bold text-xl bg-slate-300 rounded-xl pr-4 pl-4">+</button>
        <button onClick={reset} className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg">اعادة النتيجة</button>
        <button onClick={addSecondScore} className="font-bold text-xl bg-slate-300 rounded-xl pr-4 pl-4">+</button>
      </div>
      <ChooseFriend/>
    </main>
  );
}
