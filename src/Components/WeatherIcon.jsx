import './WeatherIcon.styles.css'

function WeatherIcon({ icon }) {

    let iconUrl=`http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
        <div className="weatherIcon-container">
            <img className="WeatherIcon" src={iconUrl} alt="weather-icon"/>
        </div>
    );
}

export default WeatherIcon;