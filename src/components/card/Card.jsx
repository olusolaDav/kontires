import './card.css'

export const Card = props => {
    let c = props.country
    return (
        <div className='card-container'>
        <img src={c.flags.svg} alt="flag" />
         <h2>{c.name.common}</h2>
         <p> <strong>Capital city:</strong> <span> {c.capital} </span></p>
         <p><strong>ISO 3166 code:</strong> <span>{c.cca2}</span></p>
         <p><strong>continent:</strong> <span>{c.continents}</span> </p>
         <p><strong>subreigion:</strong> <span>{c.subregion}</span></p>
         <p><strong>Time zone:</strong> <span>{c.timezones}</span></p>
         <p><strong>Population:</strong> <span>{c.population}</span> </p>
        

        </div>
    )
    
}