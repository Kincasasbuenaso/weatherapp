import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import { SUN } from './../../../constants/weathers';

import './styles.css';



const WeatherData = ({data}) => { 
    const { temperature, state, humidity, wind} = data;
    return (
    <div className="weatherDataCont">
        <WeatherTemperature temperature = { temperature } state = { SUN } > </WeatherTemperature> 
        <WeatherExtraInfo humidity = { humidity } wind = { wind } > </WeatherExtraInfo> 
    </div>);
};
export default WeatherData;