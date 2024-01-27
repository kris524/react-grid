import React, { useEffect, useState } from 'react'
import { Card } from './card';
import shuffle2dArray from '../utils/shuffle';


function createMatrix(size) {

    const matrix = []

    let start = 1

    for(let i=0; i<size; i++) {
        let row = []
        for (let j=0; j<size; j++){
            let num_in_box = start**2
            row.push(<Card number={num_in_box}></Card>)
            start+=1
        }
        matrix.push(row)

    }
    return matrix

}

export const Grid = ({gridDim}) => {

  const [matrix, setMatrix] = useState(() => createMatrix(gridDim))

  useEffect(() => {
    setMatrix(createMatrix(gridDim))
  },[gridDim])


  const handleShuffle = () => {
    setMatrix(shuffle2dArray(matrix))
  }

  return (
    <>
    <button onClick={handleShuffle} className="flex-col mt-5 bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Shuffle</button>

    <table className='flex justify-center items-center h-fit'>
        <tbody>
        {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
            ))}
            </tr>
        ))}
        </tbody>
    </table>
    </>

  )
}
