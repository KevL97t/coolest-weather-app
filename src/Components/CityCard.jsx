import './CityCard.styles.css'
import WeatherIcon from './WeatherIcon';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function CityCard({ cityName, temp, icon, feelsLike, tempMin, tempMax, pressure, humidity }) {

    const [city, setCity] = useState(null);
    const [cityTemp, setCityTemp] = useState(null);
    const [cityIcon, setCityIcon] = useState(null);

    useEffect(()=>{
        setCity(cityName);
        setCityTemp(temp);
        setCityIcon(icon);
    },[]);

    return (
        <div className="main-card-container">
            <WeatherIcon 
            icon={cityIcon}
            />
            <h1 className="card-temp">{`${cityTemp}°`}</h1>
            <h2 className="card-name">{city}</h2>
            <Link className="details-button" to={`/details/${city}/${cityTemp}/${cityIcon}/${feelsLike}/${tempMin}/${tempMax}/${pressure}/${humidity}`}>Details</Link>
        </div>
    );
}

export default CityCard;