import React, { useState } from 'react'
import LineGraph from './components/LineGraph'
import Map from './components/Map'



function MapAndCharts() {
    return (
        <div className='block relative justify-end container z-0 m-8 mx-auto'>
            <div className='mx-auto mt-16 lg:w-[70%] w-[95%]'>
                <h4 className='font-serif lg:text-3xl text-xl text-center text-blue-900'>Report of Active coronavirus cases</h4>
            </div>

            <div className='mx-auto my-8 lg:w-[70%] w-[95%] z-0 h-1/2'>
                <div className=''>
                    <h4 className='font-serif lg:text-2xl text-md my-2 text-blue-800'>Map of Active , Deaths and Recovered cases country wise</h4>
                </div>
                <Map />
            </div>

            <div className='mx-auto my-8 lg:w-[70%] w-[95%] z-0 lg:h-1/2 h-1/3'>
                <div className=''>
                    <h4 className='font-serif lg:text-2xl text-md my-2 text-blue-800'>Line chart of coronavirus cases fluctution over time </h4>
                </div>
                <LineGraph />
            </div>
        </div>
    )
}

export default MapAndCharts
