import React, { Component } from 'react'
import {CardList} from './components/card/Card-list'
import {Search} from './components/Search-box/Search'
import {Title} from './components/Title/Title'
import './App.css'

export default class App extends Component {
constructor() {
  super();

  this.state= {
    countries: [],
    searchField: ''
  }
}

componentDidMount() {
  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  
  .then(country => this.setState({countries: country}))
  //.then(country => console.log(country))

}

  render() {
    const {countries, searchField} = this.state;
    const searchFilter = countries.filter(country => 
      
      country.region.toLowerCase().includes(searchField.toLowerCase())
    
      
    );
    return (
      <>
        <div className='App'>
          <Title heading ='COUNTRIES of the WORLD' subheading= 'Get countries information and Search by Region: Africa, Americas, Asia, Europe, Oceania.' />
          <Search placeholder ='search region by Africa, Americas, Asia, Europe, Oceania.' handleChange={e => this.setState({searchField: e.target.value})} />
          <CardList countries= {searchFilter}/>
      </div>
      </>
      
    )
  }
}
