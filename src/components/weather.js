import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.temperature}&deg;C</h4>
        <h4>{this.props.description}</h4>
        <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`}/>
      </div>
    );
  }
};

export default Weather;
