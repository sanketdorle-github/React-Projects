import React from 'react'

const Home = ({toggle}) => {
  return (
    <div className='min-w-[1180px] h-[62vh] m-[129px] flex justify-content items-center '>
        <div >   
          {/* className='border-4 border-black'*/}
            <img src="../Images/dices.png" alt="dices" />
        </div>
        <div className=' relative flex  h-[40%]  gap-5'>
          {/*    border-4    border-black     */}
            <h1 className='poppins-bold text-8xl'>DICE GAME</h1>
          
            <button onClick={toggle} className=' absolute right-0 bottom-0 text-sm font-[ "Poppins", sans-serif] font-semibold bg-black text-white px-5 py-2 w-56 rounded-md '>Play Now</button>
        </div>

    </div>
  )
}

export default Home