import "./Searchbox"
import "./Infobox"

import Searchbox from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react";

export default function WeatherApp(){
    const [WeatherInfo,setWeatherInfo] =useState({
        city:"pune",
        temp: 23,
        feelslike:24.34,
        tempMin:25.4,
        tempMax:28.4, 
        humidity:47,
        weather:"haze",
    
    });

let updateInfo =(newinfo) =>{
    setWeatherInfo(newinfo);
}

    return(
        <div>
            <h3>Weather App</h3>
            <Searchbox updateInfo={updateInfo}/>
            <Infobox info={WeatherInfo}/>
        </div>
    )
}