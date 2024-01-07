import React from 'react'
import GridLayout from "react-grid-layout";
import { Card } from './card';
export const Grid = ({gridDim}) => {

  console.log(gridDim)

  let number = 1;
  return (
    <div className='grid grid-cols-4 gap-4'>
        <Card number={number}></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>


    </div>

  )
}
