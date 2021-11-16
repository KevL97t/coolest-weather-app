import { useState } from "react";
import CityCard from "./CityCard";
import Loader from "./Loader";
import './SearchBar.styles.css'

function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const APIKEY = "a36f92d4eaa16bbfdb87c14e0b646090";

    const testCity = `https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=a36f92d4eaa16bbfdb87c14e0b646090`

    const handleChange = (e) =>{
        console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    const handleSubmit =  async e =>{
        e.preventDefault();
        setData(null);
        setLoading(true);
        try{
             const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=a36f92d4eaa16bbfdb87c14e0b646090`)

            if(!res.ok){
                let err= new Error('Fetch request error');
                err.status = res.status || '00';
                err.statusText=res.statusText || 'An error occured'
                throw err;
        }     
                const parsed = await res.json();
                setData(parsed);

        } catch(err){
            console.error(err);
            window.alert("Whoops! the city name doesn't appear to exist");
        }
        finally{
            setLoading(false);
        }
    }
    console.log(data);

    return (
        <div className="searchbar-container">
            <h2 className="searchbar-title">Enter city name</h2>
            <form
            className="searchbar-form" 
            onSubmit={handleSubmit}>
            <input 
            className="searchbar-searchbar"
            name="city"
            onChange={handleChange}
            type="text" 
            placeholder="Bogota" 
            />
            <input 
            className="searchbar-button"
            type="submit" 
            value="Search"/>
            </form>
            {loading && <Loader />}
            {data && <CityCard 
            feelsLike={Math.round(data.main.feels_like-273.15)}
            tempMin={Math.round(data.main.temp_min-273.15)}
            tempMax={Math.round(data.main.temp_max-273.15)}
            pressure={data.main.pressure}
            humidity={data.main.humidity}
            cityName={data.name || null}
            temp={Math.round(data.main.temp-273.15) || null} 
            icon={data.weather[0].icon}           
            />}
        </div>
    );
}

export default SearchBar;