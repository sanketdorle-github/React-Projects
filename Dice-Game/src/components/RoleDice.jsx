import React, { useState } from 'react'

const RoleDice = ( {currentDice,rollDice}) => {

  return (
    <div className=' flex flex-col items-center  gap-4'>
        <div onClick={rollDice}><img src={`../public/Images/dice/dice_${currentDice}.png`} alt="dice img" /></div>
        <p className=' text-xl font-semibold'>Click on Dice to roll</p>
    </div>
  )
}

export default RoleDice