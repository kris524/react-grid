import React, { useState } from 'react'

export const Button = () => {


  return (
    <div>
      <button className="flex-col mt-5 bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Shuffle</button>
      <button className="flex-col mt-5 ml-4 bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Reset</button>
    </div>
  )
  
}