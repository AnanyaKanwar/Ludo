import React from 'react'
import Dice from '../../public/dices 1.png'
import Button from '../components/Button'
import { useNavigate , Link } from 'react-router-dom'

const App = () => {

  const navigate = useNavigate();



  return (
    <div className=' h-screen w-full flex items-center justify-center'>
      <div className=' h-[522px] w-[1182px] flex'>
        <div className=' w-1/2 h-full flex items-center justify-center'>
          <img src={Dice} alt="" />
        </div>
        <div className=' w-1/2 h-full flex flex-col items-end justify-center gap-2'>
          <div>
            <p className=' text-8xl font-bold'>DICE GAME</p>
          </div>
          {/* <Link to={"/main"}>Play Now</Link> */}
          <Button onclick={()=>(
              navigate("/main")
          )} name="Play Now"/>
          
        </div>
      </div>
      
    </div>
  )
}

export default App
