import React, { useState } from "react";

import Button from "../Buttons/Button";
import { MdMessage } from "react-icons/md";

import { BsTelephoneFill } from "react-icons/bs";

const ComponentForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
const [text, setText] = useState("")

//getting inputs and storing in usestates;

  const handleSubmit=(e)=>{
    e.preventDefault();
       // console.log(e);
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
        
  }

   
  return (
    <div className="flex  m-[160px] my-12 gap-14  justify-center align-center">   {/* border-blue-400 border-4*/} 
      <div className="flex flex-col  gap-8   ">                                 {/* border-yellow-400 border-4*/} 
        <div className="flex gap-10 py-4 ">
          
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<BsTelephoneFill />} />
        </div>
          <Button   isOutline={true} text="VIA EMAIL" icon={<MdMessage />}
        />

          <form  onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="flex flex-col w-[100%] relative ">
              <label  htmlFor="name" className="absolute top-[-13px] text-sm left-3 bg-white text-black p-[0px 18px]">Name</label>
              <input type="text" name="name" className="h-[40px] p-[0px 8px] border-black border-2  block  text-sm font-medium leading-6 text-gray-900" placeholder="name"/>
            </div>
            <div className="flex flex-col w-[100%] relative">
              <label  htmlFor="name" className="absolute top-[-13px] text-sm left-3 bg-white text-black p-[0px 8px]">E-Mail</label>
              <input type="email" name="email" className="h-[40px] p-[0px 8px] block  border-black border-2  text-sm font-medium leading-6 text-gray-900" placeholder="email"/>
            </div>
            <div className="flex flex-col w-[100%] relative">
              <label  htmlFor="name" className="absolute top-[-13px] text-sm left-3 bg-white text-black p-[0px 8px]">TEXT</label>
              <textarea name="text" id="" rows="80" className="h-[40px]   border-black border-2   p-[0px 8px] block text-sm font-medium leading-6 text-gray-900"> </textarea>
            </div>
          <div className="flex justify-end	right-[5px] "> <button  className=" flex justify-center item-center p-3 min-w-44 bg-black border-4 border-black  rounded-xl rouned-lg text-white h-[50px]  text-sm "> SUBMIT</button></div>
         
          </form>     
        {/* displaying data */}
          <div>         
            <p>{name}</p>
            <p>{email}</p>
            <p>{text}</p>
          </div>

      </div>
      <div className="min-w-auto">
        <img src="../public/contact/women.png" alt="women" />
      </div>
     
      
    </div>
  );
};

export default ComponentForm;
