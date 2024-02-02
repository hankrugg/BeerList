import React, {useState, useEffect} from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import './AllBeers.css'
import {Link} from "react-router-dom";


function AllBeers() {
    const [beerData, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/allbeers')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (

        <div>
            <NavBar/>
            <h1>Beers</h1>
            {beerData.map((b) =>
                <div key={b.id}>
                    <Link to={"details/" + b.id}>
                        <p> Name : {b.name} </p>
                        <p> Brewery : {b.brewery} </p>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default AllBeers;