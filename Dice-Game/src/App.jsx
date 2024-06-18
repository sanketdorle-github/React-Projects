import { useState } from 'react'
import Home from './components/Home'
import GamePage  from './components/GamePage.jsx'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startGame= ()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
  
    <>
      {isGameStarted?<GamePage/>:<Home toggle={startGame}/>}
     
    </>
  )
}

export default App
