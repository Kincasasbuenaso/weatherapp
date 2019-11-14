import React from 'react';
import PropTypes from 'prop-types';

//const Location = (props) - Normal 

//destructuring
const Location = ({city}) => {
    //console.log(props);
    //debugger;

    //normal 
    //const city = props.city;

    //destructuring 
    //const { city } = props;
    return (<div><h1>{city}</h1></div>);
};

Location.propTypes = {
    city:PropTypes.string.isRequired,
}
export default Location;