import React from 'react'

const Navigation = () => {
  return (
   <nav   className='bg-gray-400' >
    <div className='flex justify-between  items-center mx-36'>
    <div><img src="/Images/Frame 2 1.png" alt="logo" /></div>
    <ul className=' flex gap-4 text-black-800 text-lg font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    </div>
   </nav>
  )
}

export default Navigation