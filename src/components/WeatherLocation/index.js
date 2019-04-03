import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import transformWeather from '../../services/transformWeather';
import {api_url} from '../../constants/api_url';


class WeatherLocation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Mexico',
            data: null,
        }
        console.log('constructor');
    }


    componentDidMount() {
        console.log('componentDidMount');
        this.handleUpdateClick();
        
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

   
    handleUpdateClick = () => {
        fetch(api_url).then( res => {
            return res.json();
        }).then( data => {
            const newWeather = transformWeather(data);
            this.setState({
                data: newWeather
            })
        })
    }




    render() {
        console.log('render');
        const {city, data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city} />
                { data ? <WeatherData data={data} /> : <CircularProgress/>}
            </div>
        );
    }
}



export default WeatherLocation;