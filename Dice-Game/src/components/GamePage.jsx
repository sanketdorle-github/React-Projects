import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector.jsx";
import RoleDice from "./RoleDice.jsx";
import Rules from "./Rules.jsx";

const Gameplay = () => {
  const [selected, setSelected] = useState(); /// set number to 1 by default

  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [Error, setError] = useState();
  const [showRules, setShowRules] = useState(false)

  const genrateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const rollDice = () => {
    if (!selected) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = genrateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selected === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    //   setScore(undefined)
  };
  const resetScore=()=>{
    setScore(0);
  }
  return (
    <div className=" flex flex-col items-center">
      <div className=" flex w-11/12 items-center justify-between my-1">
        <Score score={score} />
        <NumberSelector
          Error={Error}
          setError={setError}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>
        <RoleDice currentDice={currentDice} rollDice={rollDice} />
      </div>
      <div className=" flex flex-col gap-3 m-4 min-w-40">
        <button className="  text-black bg-white  border-2 border-black rounded-md px-2 text-sm py-1" onClick={resetScore} >Reset Score</button>
        <button className="  bg-black text-white border-2 border-black rounded-md px-2 text-sm py-1"  onClick={()=> setShowRules((prev)=>!prev)} >{showRules?"Hide":"Show"}  Rules</button>
      </div>
     {showRules &&  < Rules/>}
    </div>
  );
};

export default Gameplay;
