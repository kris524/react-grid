import React, { useEffect, useState } from 'react'
import { Grid } from './grid'

export const InputForm = () => {
    const [gridDim, setGridDim] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        setGridDim(event.target.grid.value)
        localStorage.setItem('gridDim', event.target.grid.value)
    }

    useEffect(() => {
        const storeValue = localStorage.getItem('gridDim')
        if (storeValue){
            setGridDim(storeValue)
        }
    }, [])



  return (
    <div >
        <form onSubmit={handleSubmit}>
            <label className='flex flex-col '>Grid size</label>
            <input placeholder={gridDim} id="grid"  type="number" name='grid' min="1" max="100" className="flex-col bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button type="submit" className="flex-col bg-blue-500 mb-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  >Create Grid</button>
        </form>
        {gridDim !== null && <Grid gridDim={gridDim}></Grid>}
    </div>
  )
}



