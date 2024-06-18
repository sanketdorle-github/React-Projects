import React, { useState } from 'react'


const NumberSelector = ({selected, setSelected,Error, setError}) => {
  const num=[1,2,3,4,5,6];
// console.log(selected);

const NumberSelectorHandler=(value)=>{
  setSelected(value);
  setError("")
}

  return (
    
    <div className='flex flex-col items-end gap-5 '>
      <p className=' text-red-700 text-xl'>{Error}</p>
    <div className='flex  gap-12'>
        {num.map((value,index)=>(
          <div key={index} 
        onClick={()=>NumberSelectorHandler(value)}
          className={value===selected?'bg-black text-white w-[72px] h-[72px] text-2xl font-bold grid items-center justify-center border-2 border-black':'bg-white text-black w-[72px] h-[72px] text-2xl font-bold grid items-center justify-center border-2 border-black'}>{value} </div>
        ))}

        {/*w-[72px] h-[72px] text-2xl font-bold grid items-center justify-center border-2 border-black*/}
    </div>
        <h3 className='text-2xl font-bold'> Select Number</h3>
    </div>
  )
}

export default NumberSelector