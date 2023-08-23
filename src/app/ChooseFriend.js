import React, { useState } from 'react';

function ChooseFriend() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');
  const [teams, setTeams] = useState({ team1: [], team2: [] });

  const handleInputChange = () => {
    let friendsArray = [inputValue1, inputValue2, inputValue3, inputValue4];
    let shuffledFriendsArray = shuffleArray(friendsArray);

    let team1 = shuffledFriendsArray.slice(0, 2);
    let team2 = shuffledFriendsArray.slice(2, 4);

    setTeams({ team1, team2 });
  };

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="mt-16">
      <div className="grid grid-cols-2 gap-6">
        <input className="border-black border rounded-md text-black pl-4 p-1" type="text" onChange={(event) => setInputValue1(event.target.value)} />
        <input className="border-black border rounded-md text-black pl-4 p-1" type="text" onChange={(event) => setInputValue2(event.target.value)} />
        <input className="border-black border rounded-md text-black pl-4 p-1" type="text" onChange={(event) => setInputValue3(event.target.value)} />
        <input className="border-black border rounded-md text-black pl-4 p-1" type="text" onChange={(event) => setInputValue4(event.target.value)} />
        <button onClick={handleInputChange} className="bg-slate-200 p-2 pr-6 pl-6 rounded-lg">تكوين فرق</button>
      </div>
      <div className="mt-6 flex flex-row gap-8 text-center items-center justify-center">
        <div className="bg-red-300 p-4 rounded-xl pl-12 pr-12 flex gap-1 flex-col">
          <h2 className='font-semibold pb-2'>الفريق الأول</h2>
          {teams.team1.map((friend, index) => (
            <p key={index}>{friend}</p>
          ))}
        </div>
        <div className="bg-violet-300 p-4 rounded-xl pl-12 pr-12 flex gap-1 flex-col">
          <h2 className='font-semibold pb-2'>الفريق الثاني</h2>
          {teams.team2.map((friend, index) => (
            <p key={index}>{friend}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseFriend;
