import React, { useEffect, useState } from 'react'



export const CountryInfo = ({country, weather}) => {
 
  
  
  return (
    <div>
        <h2>{country.name.common}</h2>
        <p>capital {country.capital[0]}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {Object.entries(country.languages).map(([code, name]) =>(
            <li key={code}>
              {name}
            </li>
          ) )}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
        <h3>Weather in {weather.location.name}</h3>
        <p><b>temperature:</b> {weather.current.temperature} celsius</p>
        <img src={weather.current.weather_icons[0]} alt="Current weather icon" />
        <p><b>wind:</b> {weather.current.wind_speed} mph {weather.current.wind_dir}</p>
            
    </div>
  )
}
