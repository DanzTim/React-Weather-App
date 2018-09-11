import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div >
      <header>
        <h4><big>React Weather Forecast</big></h4>
      </header>
      <SearchBar/>
      <WeatherList/>
      <footer>
        <p>Made By Dandi Temmu <small>from Stephen Grider Udemy course</small></p>
      </footer>
      </div>
    );
  }
}
