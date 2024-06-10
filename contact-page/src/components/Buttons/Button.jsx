import React from 'react'


const Button = (props) => {
  // props taken for two buttons using same component
  return (
    <div className={ props.isOutline? `p-[18px 10px] min-w-45 bg-white text-gray-900 border-2 border-gray-900  flex rounded-md items-center justify-center gap-6`:'p-[8px] min-w-56 bg-black text-white border-3  flex rounded-md items-center justify-center gap-[8px]'}>
        {props.icon}
        <h4>{props.text}</h4>
        
    </div>
  )
}

export default Button