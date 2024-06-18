import React from 'react'

const Score = ( {score} ) => {
  return (
  
      <div className='w-28 border-2  border-black flex flex-col items-center'>
        <h3 className='text-7xl font-semibold'>{score}</h3>
        <p className='text-lg font-semibold'>Total Score</p>
      </div>
  )
}

export default Score