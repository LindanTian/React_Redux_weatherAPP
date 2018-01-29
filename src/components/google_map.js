import React, {Component} from 'react';

export default class GoogleMap extends Component {
	render() {
		// this.refs.map  after rendered inside this component
		return (<div ref='map' />);
	}
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat: this.props.lat,
				lng: this.props.lon
			}
		});
	}
}