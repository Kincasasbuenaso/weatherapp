import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, RAIN, SUNNY, SNOW, WINDY } from './../../../constants/weathers';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SUNNY]: 'day-sunny',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
};


const getWeatherIcon = state => {
    const sizeIcon='4x';
    const icon = icons[state];
    if (icon) {
        return <WeatherIcons name = { icon }  size = {sizeIcon} /> ;
    } else {
        return <WeatherIcons name = { "day-sunny" } size = {sizeIcon} /> ;
    }
}


const WeatherTemperature = ({ temperature, state }) => {
    return ( <div className="weatherTemperatureCont"> { getWeatherIcon(state) } < span > { `${temperature} C°` } </span></div > );
};

WeatherTemperature.propTypes = {
    temperature:PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
};
export default WeatherTemperature;