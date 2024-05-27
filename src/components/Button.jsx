import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button
        onClick={props.onclick}
        className= {` ${props.clr=='white'?"text-black border-black border-2":"bg-black text-white"} px-10 py-1 rounded-sm`}>{props.name}</button>
      
    </div>
  )
}

export default Button
