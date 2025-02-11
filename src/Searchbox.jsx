import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css"
import { useState } from 'react';


export default function Searchbox({updateInfo}){
    let [city,setCity] =useState("");
    let [error,setError] =useState(false);

       const API_URL =" https://api.openweathermap.org/data/2.5/weather"
       const API_key ="7763d0110d26118f94380097ee29143a";

       let getWeatherInfo =async()=>{
        try{

        
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
       let jsonResponse =await response.json();
       console.log(jsonResponse);
       let result ={
        city:jsonResponse.name,
        temp:jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description,
       }; 
       console.log(result);
       return result;
        }catch(err){
            throw err;
        }
       };
    
    let handleChange =(evt) =>{
        setCity(evt.target.value);
    }
    let handleSubmit =async (evt) =>{
        try{

        
        evt.preventDefault();
        console.log(city);
        setCity("");
      let newinfo = await getWeatherInfo();
      updateInfo(newinfo);
        }catch(err){
setError (true);
        }
    }
    return(
        <div  className='SearchBox'>
             <form action="" onSubmit={handleSubmit}>
            <TextField id="outlined-basic"
             label="City name"
             variant="outlined"
              value={city}
              onChange={handleChange} required />
            <br /><br />
            <Button variant="contained" type="submit">
                Search

            </Button>
            {error && <p  style={{color:'red'}}>NO such place exists!</p>}
            </form>
        </div>
    )
}