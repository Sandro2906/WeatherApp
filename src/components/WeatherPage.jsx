import React from 'react'
import axios from "axios";
import { useState } from "react";


export const WeatherPage = () => {

    const [city,setCity] = useState('');
    const [tf,setTf] = useState(false);
    const [weatherData,setWeatherData] = useState(null)
    const [time, setTime] = useState('')
   
  
    const handleChange = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d9ca5643d1a24d191ddf6736cbb054d1`);
        setWeatherData(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert('City doesn\'t exist...')
      }
    };
    
  
    function findCity(ev){
      ev.preventDefault();
      setTf(true);
      handleChange();
    }
  
    
    return (
       
      <div>

        <div className="w-full h-[70px] bg-black flex items-center justify-between">
          <h1 className="text-white font-serif font-semibold md:text-3xl pl-5">WorldWeather</h1>
          <h1 className="text-white font-serif font-semibold text-sm pr-5">Made by: Sandro Gataric</h1>
        </div>
        <div className="w-full h-screen bg-gray-800 flex flex-col md:flex-row items-center md:justify-around ">
          <div className="relative overflow-hidden w-[360px] h-[210px] items-center justify-center flex rounded-3xl my-12 changeShadow"> 
            <div className="rotate-animation absolute inset-0">
              <div className="conic-bg"></div>
            </div>
            <div className="relative z-10">
              <form onSubmit={findCity} className="flex flex-col w-[350px] h-[200px] bg-black p-2 justify-center items-center rounded-3xl">
                <label className="text-3xl text-white pb-3 font-semibold">ENTER CITY HERE:</label>
                <input placeholder="ex. Los Angeles" value={city} onChange={ev=> setCity(ev.target.value)} type="text" className="p-2 border border-gray-800 rounded-xl" />
                <button type='submit' onClick={findCity} className="w-[100px] h-[50px] text-black rounded-full bg-white mt-3 font-semibold hover:bg-black hover:text-white hover:border hover:border-white">SUBMIT</button>
              </form>
            </div>
          </div>
    
          {tf && weatherData ?(
             <div className="w-[350px] h-[250px] bg-black rounded-2xl  shadow-white changeShadow">
                <div className='flex justify-between items-center bg-slate-400 rounded-t-2xl '>
                    <div>
                        <h1 className="text-2xl text-white font-extrabold pl-4">{weatherData.name}</h1>
                        <h1 className="text-white text-sm pb-1 pl-4">Weather: {weatherData.weather[0].description}</h1>
                    </div>
                    <div>
                        <img className='w-[100px] pr-4' src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='Weather Icon' />
                    </div>
                </div >
              
                <div className='w-[350px] h-[170px] flex items-center justify-start'>
                    <div className='flex text-white'>
                <div className='pr-3'>
                    <h1 className="text-white text-7xl pl-5 font-semibold pb-1">{(Number(weatherData.main.temp) - 273.15).toFixed(1)}C</h1>
                </div>
                <div className='font-bold text-xs w-[90px]'>
                <h1 className='text-white pr-28 '>Details</h1>
                <h1 className=''>Min/Max:</h1>
                <h1>Feels like:</h1>
                <h1>Wind speed:</h1>
                </div>
                </div>
                <div className='text-white text-xs'>
                    <h5 className="">{(Number(weatherData.main.temp_min- 273.15)).toFixed(1) +"/"+(Number(weatherData.main.temp_max)- 273.15).toFixed(1) }</h5>
                    <h1 className=""> {(Number(weatherData.main.feels_like)-273.15).toFixed(1)}</h1>
                    <h1 className=""> {weatherData.wind.speed}</h1>
                </div>
                </div>
               
             </div>
             
             ) :(
                <div className='sm:hidden'>
                    <h1 className='text-white'>Loading...</h1>
                </div>
             )
             }
         
         
        </div>
      </div>
)}
//
//https://api.api-ninjas.com/v1/worldtime?city=London

{/* <div className="w-[130px] h-[150px] text-white flex flex-col "> 

  
 
</div> */}


{/* 

 */}