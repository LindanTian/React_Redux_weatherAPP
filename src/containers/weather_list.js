import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

export class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const {lon, lat} = cityData.city.coord;
		//const lat = cityData.city.coord.lat;
		console.log(temps);
		//<td>{name}</td>
		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat}/></td>
				<td><Chart data={temps} color="orange" units='K'/></td>
				<td><Chart data={pressures} color="green" units='hPa'/></td>
				<td><Chart data={humidities} color="black" units='%'/></td>
			</tr>
		)
	}
	render() {
		console.log('checkout the weather', this.props.weather);
		
			return (
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		); 
		
		
		//console.log(this.props);
		
	}
}
 function mapStateToProps(state) {
 	console.log('checkout the state', state.weather);
 	return {weather: state.weather};
 }

// function mapStateToProps({weather}) {
// 	//return {weather: weather};
// 	return {weather}; // ES6 {weather: weather} == {weather}
// }
export default connect(mapStateToProps)(WeatherList);