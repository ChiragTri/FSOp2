// Show Country Info component 
// shows inforrmation about specific country


// reference: { name:{common}, capital, area, languages, flags:{png}}

const CountryInfo = ({ country }) => {
  return(
    <>
      <h1>{country.name.common}</h1>
      <p>
        capital {country.capital} <br/>
        area {country.area} <br/>
      </p>
      <strong>languages:</strong><br/>
      <ul>
        {Object.values(country.languages).map((lang) => 
          <li key={lang}>{lang}</li>
        )}
      </ul>
      <img src={country.flags.png} alt={`flag of ${country.name.common}`}/>
    </>
  )
}

export default CountryInfo
