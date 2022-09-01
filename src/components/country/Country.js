import styled from "styled-components";
import './Country.css';

const StyledCountry = styled.div` 
border-radius: 5px;
overflow:hidden;
width:90%;
padding-bottom:1rem;

margin-bottom:3rem;
 @media (max-width:375.9px ) {
    margin:0 auto;
    margin-bottom:2rem
  }
  @media (min-width:376px ) {
   width:22%;   
  }
`

const Country=({imageSource,countryName,population,region,capital,click,mode}) => {
    return (
        <StyledCountry className={mode===true?"country-light":'country-dark' }   onClick={click}>
            
            <img className="country-img" src={imageSource} alt="Flag of the country" />
            <div className="details-div">
   <h4>{countryName}</h4>
            <p className="details">Population: <span className="details-1">{population}</span></p>
            <p className="details">Region: <span className="details-1">{region}</span></p>
            <p className="details">Capital: <span className="details-1">{capital}</span></p>
            </div>

        </StyledCountry>
    )
}
export default Country;