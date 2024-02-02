import React, {useEffect} from 'react';
import axios from 'axios';
import NavBar from "./NavBar";

function Home() {

    useEffect(() => {
        axios.get('http://localhost:8000/home')
            .then(response => {
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (

        <div>
            <NavBar/>
            <h1>Welcome to BeerList!</h1>
        </div>
    );
}

export default Home;