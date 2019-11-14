import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import { CLOUD, CLOUDY, SUN, RAIN, SUNNY, SNOW, WINDY } from './../../constants/weathers';

const data = {
    temperature:5,
    state:SUN,
    humidity:10,
    wind:'10 m/s'
}

const WeatherLocation = () => (
    <div> 
        <Location city={"Barranquilla"}></Location>
        <WeatherData data={data}></WeatherData>
    </div>
);

export default WeatherLocation;