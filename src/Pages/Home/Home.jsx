import SearchBar from "../../Components/SearchBar";
import './Home.styles.css'



function Home() {
    return (
        <div className="home-main-container">
            <h1 className="home-title">COOLEST WEATHER APP</h1>
            <SearchBar />
            <div className="poweredby-container">
                <p className="poweredby-text" >Powered by:</p>
                <img 
                src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" 
                alt="open-weather-api-logo" 
                className="poweredby-img" />
            </div>
        </div>
    );
}

export default Home;