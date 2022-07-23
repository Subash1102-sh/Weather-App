import React from 'react'
import {
    UilSun,
    UilTemperature,
    UilTear,
    UilWind,
    
    UilSunset,
    
  } from "@iconscout/react-unicons";


function TemperatureAndDetails() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>
                Clear
            </p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3 '>
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" className='w-20' />
                      <p className='text-5xl'>34° </p>

            <div className='flex flex-col space-y-2'>
                          <div className='flex font-light text-sm items-center justify-center'>
                                  <UilTemperature size={18} className="mr-1"/>
                                  Real Feel!
                                  <span className='font-medium ml-1'>32°</span>
                          </div>

                          <div className='flex  fontfont-light text-sm items-center justify-center'>
                                  <UilTear size={18} className="mr-1"/>
                                   Humidity
                                  <span className='font-medium ml-1'>65%</span>
                          </div>

                          <div className='flex font-light text-sm items-center justify-center'>
                                  <UilWind size={18} className="mr-1"/>Wind
                                  <span className='font-medium ml-1'>10 kmph</span>
                          </div>
          
              </div>
             
                              
             
          
        </div>

       
        <div className='flex  flex-row items-center justify-center space-x-1 text-white text-sm py-3'>
               <UilSun/> <p className='font-light flex-row'>Rise<span className='font-medium ml-1'>5:00 AM</span></p>
                   <p className='font-right'>|</p>
                  
                   <UilSunset/><p className='font-light flex-row'> Set<span className='font-medium ml-1'>1:45 AM</span></p>
                   <p className='font-right'>|</p>
                  
                   <UilSun/> <p className='font-light flex-row'>High<span className='font-medium ml-1'>18°</span></p>
                   <p className='font-right'>|</p>
                 
                   <UilSun/> <p className='font-light flex-row'>Low<span className='font-medium ml-1'>28°</span></p>
                   <p className='font-right'></p>
        </div>
       
        
    </div>
  )
}

export default TemperatureAndDetails