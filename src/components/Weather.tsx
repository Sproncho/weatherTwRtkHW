import React from 'react';
import {useSelector} from "react-redux";
import {useAppSelector} from "../app/hooks";
import {weatherInfo} from "../utils/constants";

const Weather = () => {
    const info = useAppSelector<weatherInfo>(state => state.weatherInfo);
    const message = useAppSelector(state => state.message);

    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {info.country}, {info.city}</p>
                    <p>Temp: {info.temp}</p>
                    <p>Pressure: {info.pressure}</p>
                    <p>Sunset: {new Date(info.sunset * 1000).toLocaleTimeString()}</p>
                </div>}
            <p>{message}</p>
        </div>
    );


};

export default Weather;