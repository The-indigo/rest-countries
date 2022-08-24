import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Country from './components/Country';

function App() {
  const [country, setCountry] = useState([])
  const [mode,setMode]=useState(false)
  useEffect(() => {
    const fetchData = async ()=>{
      const response = await axios.get('https://restcountries.com/v3.1/all')
      if (response.data) {
        setCountry(response.data)
      }
      // console.log(response.data);
    }
    fetchData();
  }, [])

  const toggleMode = () => {
    setMode(!mode)
  }

  return (
    <div>
      <div className={`header ${mode ? "header-dark" : "header-light"}`}> 
        <div className='header-container container'>
                <h4>Where in the world?</h4>
        <p onClick={toggleMode}>Dark Mode</p>
        </div>
      </div>
      <div className='container'>

        <div className='input-div'>
          <input type='text' className='search-box' placeholder='Search for a country...' />
          <div className='select-div'>
          <select id="region" name="region" className='select-options'>
  <option value="volv">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
                <option value="volv">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
          </div>

        </div>
      
        <main className='main'>
            {country.map(
        n => <Country key={n.name.official}  imageSource={n.flags.png}
          countryName={n.name.common}
          population={ n.population}
          region={n.region }
          capital={n.capital}
        />
      )}    
</main>
      </div>
    </div>
  );
}

export default App;
