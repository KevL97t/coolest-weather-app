import { useParams } from "react-router";
import WeatherIcon from "./WeatherIcon";
import './DetailsCard.styles.css'

function DetailsCard() {
    const params = useParams();
    console.log(params);

    return (
        <div className="detailscard-main-container">
                <WeatherIcon 
                icon={params.icon}
                />
                <div className="details-container">
                <h2>{params.temp}°</h2>
                <h1>{params.city}</h1>
                </div>
                <div className="details-container__details">
                <p>Feels like: <strong>{params.feels_like}°</strong></p>
                <p>Min. Temperature: <strong>{params.temp_min}°</strong></p>
                <p>Max. Temperature: <strong>{params.temp_max}°</strong></p>
                <p>Atm. Pressure: <strong>{params.pressure}Pa</strong></p>
                <p>Humidity level: <strong>{params.humidity}%</strong></p>
                </div>
        </div>
    );
}

export default DetailsCard;