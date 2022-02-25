import './card-list.css'
import {Card} from './Card'

export function CardList(props) {
  return (
    <div className="card-list">
         {props.countries.map(country => (
         <Card key={country.cca3} country={country} />
         ))}

    </div>
  )
} 
