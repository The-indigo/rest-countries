const CountryDetails = ({
    goBack,
    imageSource,
  countryName,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
    languages,
  borderCountries
}) => {
  return(
    <div>
      <div className="back-botton">
        <p onClick={goBack}> Back</p>
      </div>
      <main className="details-div">
        <div className="image-div">
          <img src={imageSource} alt="country flag" />
        </div>
        <div className="details-div">
                  <h4>{countryName}</h4>
                  
                  <div className="details-text-div">
                          <div className="details-text-1">
            <p>Native Name:{nativeName}</p>
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p>Sub-Region:{subRegion}</p>
            <p>Capital:{capital}</p>
          </div>

          <div className="details-text-2">
            <p>Top Level Domain:{topLevelDomain}</p>
            <p>Currencies:{currencies}</p>
            <p>Languages:{languages}</p>
          </div> 
                  </div>
                  <div className="border-countries-div">
                      <p>Border Countries:{ borderCountries}</p>
                  </div>

     
        </div>
      </main>
    </div>
  );
};
export default CountryDetails;
