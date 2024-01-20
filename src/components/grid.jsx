import React from 'react'
import GridLayout from "react-grid-layout";
import { Card } from './card';


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
    // console.log("Matrix is:", matrix)
    return matrix

}

export const Grid = ({gridDim}) => {

  let matrix = createMatrix(gridDim)

  return (
        <table>
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

  )
}
