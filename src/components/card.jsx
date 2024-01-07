import React, { useState } from 'react'

export const Card = ({number}) => {

    const [color, setColor] = useState("white")


  return (
    <div onClick={() => {
        setColor(color === "white" ? "#1ad1ff" : "white")
        }} style={{background: color}} className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h2 className='font-bold text-xl mb-2'>{number}</h2>
    </div>
  )
  
}
