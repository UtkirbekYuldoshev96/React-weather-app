import React, {useState} from 'react';
import {ApiApp} from "./API/Api";

function Aplication(props) {

      const [query, setQuery] = useState('');
      const [weather, setWeather] = useState({});

      const search = async (event) => {
            if(event.key === "Enter"){
                  const data = await ApiApp(query);
                  setWeather(data);
                  setQuery();
                  console.log(data);
            }
      }

      return (
            <>
                  <div className="main-container">
                        
                        <div className="search-div">
                              <input 
                                    type="text"
                                    className='search-div'
                                    placeholder='Search...' 
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    onKeyPress={search}
                              />
                        </div>
                        {
                              weather.main && (
                                    <div className='city'>
                                          <div className='info'>
                                          <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                                          </div>
                                          <div className='detaile'>
                                                <h2 className='city-name'>
                                                      <span>{weather.name}</span>
                                                      <sup>{weather.sys.counter}</sup>
                                                </h2>
                                                <div className="city-temp">
                                                      {Math.round(weather.main.temp)}
                                                      <sup>&deg;C</sup>
                                                      <p>{weather.weather[0].description}</p>
                                                </div>
                                          </div>
                                    </div>
                              )
                        }
                  </div>     
            </>
      );
}

export default Aplication;