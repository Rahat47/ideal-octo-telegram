
import './App.css';
import { useEffect, useState } from 'react';
import Country from './component/Country/Country';
import Statistic from './component/Statistics/Statistic';


function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState([])

  function handleSelectCountry(country) {
    const newSelected = [...selectedCountry, country]
    setSelectedCountry(newSelected)
  }

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="App">

      <Statistic selectedCountry={selectedCountry}></Statistic>

      {countries.map(country => <Country key={country.numericCode} country={country} selectCountry={handleSelectCountry} />)}


    </div>
  );
}

export default App;
