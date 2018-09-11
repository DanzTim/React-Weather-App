import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google-maps';
import Weather from '../components/weather';
import _ from 'lodash';

class WeatherList extends Component{
  renderWeather(data){
    const name = data.city.name;
    const curTemp = _.round(data.list[0].main.temp-273.15);
    const weather = _.startCase(data.list[0].weather[0].description);
    const icon = data.list[0].weather[0].icon;
    const temps = data.list.map(weather => weather.main.temp-273.15);
    const humidities = data.list.map(weather => weather.main.humidity);
    const { lon, lat } = data.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Weather temperature={curTemp} description={weather} icon={icon}/>
        </td>
        <td>
          <Chart data={temps} color="blue" units="&deg;C"/>
        </td>
        <td>
          <Chart data={humidities} color="green" units="%"/>
        </td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Weather Condition Today</th>
            <th>Temperature Over The Next 5 days</th>
            <th>Humidities Over The Next 5 days</th>
          </tr>
        </thead>
        <tbody>{this.props.weather.map(this.renderWeather)}</tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList)
