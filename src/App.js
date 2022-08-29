import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Country from "./components/country/Country";
import CountryDetails from "./components/countrydetails/CountryDetails";
import Button from "./components/Buton/Button";

function App() {
  const [country, setCountry] = useState([]);
  const [regions, setRegions] = useState([]);
  const [mode, setMode] = useState(false);
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [countryDetail, setCountryDetail] = useState({
    imageSource: "",
    countryName: "",
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    topLevelDomain: "",
    currencies: "",
    languages: [],
    borderCountries: [],
  });
  const [toDetailsScreen, setToDetailsScreen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      let regionData=[]
      if (response.data) {
        setCountry(response.data);
        response.data.forEach(element => {
          if (!regionData.includes(element.region)) {
            regionData.push(element.region)
          }
        });
        regionData.sort()
        setRegions(regionData)
      }
    };
    
    fetchData();
  }, []);

  const toggleMode = () => {
    setMode(!mode);
  };

  const toggleFilterDisplay = () => {
    setFilterDisplay(!filterDisplay)
  };

  const goBack = () => {
    setToDetailsScreen(false);
  };
  const goToDetails = (id) => {
    const getCountry = country.find((n) => n.name.official === id);
    if (getCountry) {
      console.log(Object.values(getCountry.name.nativeName)[0].common);
      const borders = [];

      getCountry.borders.forEach((element) => {
        const border = country.find((n) => n.cca3 === element);
        if (border) {
          borders.push(border.name.common);
        }
      });

      setCountryDetail({
        imageSource: getCountry.flags.png,
        countryName: getCountry.name.common,
        population: getCountry.population,
        region: getCountry.region,
        subRegion: getCountry.subregion,
        capital: getCountry.capital,
        topLevelDomain: getCountry.tld,
        currencies: Object.values(getCountry.currencies)[0].name,
        languages: Object.values(getCountry.languages),
        borderCountries: borders,
        nativeName: Object.values(getCountry.name.nativeName)[0].common,
      });
      setToDetailsScreen(true);
    }
  };
  return (
    <div>
      <div className={`header ${mode ? "header-light" : "header-dark"}`}>
        <div className="header-container container">
          <h4>Where in the world?</h4>
          <p onClick={toggleMode}>Dark Mode</p>
        </div>
      </div>
      <div className="container">
        {toDetailsScreen ? (
          <CountryDetails
            goBack={goBack}
            nativeName={countryDetail.nativeName}
            imageSource={countryDetail.imageSource}
            countryName={countryDetail.countryName}
            population={countryDetail.population}
            region={countryDetail.region}
            subRegion={countryDetail.subRegion}
            capital={countryDetail.capital}
            topLevelDomain={countryDetail.topLevelDomain}
            currencies={countryDetail.currencies}
            languages={countryDetail.languages.map((val) => (
              <span key={val}>{val},</span>
            ))}
            borderCountries={countryDetail.borderCountries.map((val) => (
              <Button key={val} buttonText={val} />
            ))}
          />
        ) : (
          <>
            <div className="input-div">
              <input
                type="text"
                className="search-box"
                placeholder="Search for a country..."
              />

              <div className="select-div">
                <div className="filter-div" onClick={toggleFilterDisplay}>
                  <p>Filter by Region</p>
                  </div>
                  {filterDisplay ? <div className="options-div">
                    {regions.map(n => <p key={n}>{n}</p>)}
                  
                  {/* <p>Volvo</p>
                  <p>Volvo</p>
                  <p>Volvo</p>
                  <p>Volvo</p> */}
                </div>: null}
           

                {/* <select id="region" name="region" className="select-options">
                <option value="volv">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
                <option value="volv">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
                
              </select> */}
              </div>
            </div>
            <main className="main">
              {country.map((n) => (
                <Country
                  click={() => goToDetails(n.name.official)}
                  key={n.name.official}
                  imageSource={n.flags.png}
                  countryName={n.name.common}
                  population={n.population}
                  region={n.region}
                  capital={n.capital}
                />
              ))}
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
