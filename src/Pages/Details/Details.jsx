import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard";
import Loader from "../../Components/Loader";
import './Details.styles.css'

function Details() {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(false);
    },[]);

    return (
        <div className="details-page-container">
            {loading && <Loader />}
            <DetailsCard />
            <Link className="go-back-button" to="/">Go back</Link>
        </div>
    );
}

export default Details;