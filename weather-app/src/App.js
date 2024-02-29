
import './App.css';
import {useEffect, useState} from 'react';


function App() {

  const API_key = ('340e538ecc699b4b8dc7f3bdcf61837b');
  const [location,setLocation] = useState("");
  const [data,setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}`)
    .then(res => res.json())
    .then(result => setData(result))
    
  },[location])

    const temp = Math.floor(data.main.temp - 273.15);


  return (
    <>
      <div className="container">
        <div className="title">
          <p>Weather App</p>
        </div>
        <div className="input">
          <input type="text" id="location-input" placeholder="Location.." value={location} onChange={e => setLocation(e.target.value)}/>
          <input type="button" value="get" id="btn" />
        </div>
        <div className="info">
          <i className="fa-solid fa-cloud"></i>
          <div className="temp"><span id="temp-value">{temp}</span><span id="unit">&#176;</span><span id="c">C</span></div>
          <div id="weather-desc">{data.weather[0].description}</div>
          <div id="location">{data.name}</div>
        </div>
      </div>
    </>
    
  );
}

export default App;
