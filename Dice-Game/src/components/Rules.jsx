import React from 'react'

const Rules = () => {
    const clr={
        color:"black",
        fontSize:'15px',
    };
  return (
    <div className='bg-[#FBF1F1]'>
        <h2 className='text-xl text-red-700 font-bold'>How to play dice game</h2>
        <div className='my-4'>

        <p style={clr} >Select any number</p>
        <p style={clr} >Click on dice image</p>
        <p style={clr} >after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p style={clr} >if you get wrong guess then  2 point will be dedcuted </p>
        </div>
    </div>
  )
}

export default Rules