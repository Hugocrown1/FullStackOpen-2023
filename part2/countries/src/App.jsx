import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { CountryInfo } from './CountryInfo'

function App() {
  const [filterName, setFilterName] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState({})


  const handleButtonClick = (countryName) =>{
    setFilterName(countryName)
  }

  const handleInputChange = (e) =>{
    setFilterName(e.target.value)

  }

  const api_key = import.meta.env.VITE_API_KEY

  const filteredCountries = countries.filter(country => (country.name.common).toLowerCase().includes(filterName.toLowerCase()))
  const countriesList = filteredCountries.map(country => 
    <p key={country.population}> 
    <span >{country.name.common}</span>
    <button onClick={() => handleButtonClick(country.name.common)}>show</button>
    </p>
    )
  
  
  
    useEffect(() => {
      const country = filteredCountries[0];
    
      if (country && country.capital[0]) {
        
        const params = {
          access_key: api_key,
          query: country.capital[0]
        };

        console.log(params.query)

        
    
        axios.get('http://api.weatherstack.com/current', { params })
          .then(response => {
            setWeather(response.data);
            console.log(weather)
          })
          .catch(error => {
            console.log(error);
          });
      }
    }, [filteredCountries[0]]);
  
  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        
        setCountries(response.data)
        console.log(countries)
        
      })

  },[])
 
  

  return (
    <>
    <h1>Countries</h1>
    
      find countries <input name='filter' value={filterName} onChange={handleInputChange} />

      <div>
        {filteredCountries.length > 10 ? (
          <p>Too many matches, be more specific</p>
        ) : filteredCountries.length > 1 ? (
          countriesList
        ) : filteredCountries.length === 1 ? (
          <CountryInfo country={filteredCountries[0]} weather={weather}/>
        ) : (
          <p>No matching countries found</p>
        )}
      </div>
    
    </>
  )
}

export default App
