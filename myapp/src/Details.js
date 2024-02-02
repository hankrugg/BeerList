import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import { useLocation} from "react-router-dom";
import {useForm} from "react-hook-form";


function Details() {
  const [beer, setBeer] = useState([]);
  const [reviews, setReviews] = useState([]);
  let beerId = Number(useLocation().pathname.split('/').pop())


  useEffect(() => {
    axios.get('http://localhost:8000/details/' + beerId )
      .then(response => {
        setBeer(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios.get('http://localhost:8000/review/' + beerId)
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  const onSubmit = async (formData) => {
      await axios.post('http://localhost:8000/postreview',formData)
      window.location.reload();

  }


  const {register,
        handleSubmit
    } = useForm({mode: "onSubmit"});

  return (
      <div>
          <NavBar/>
          <h1>Beers</h1>
            {beer.map((b) =>
                <div key={b.id}>
                    <p> Name : {b.name} </p>
                    <p> Brewery : {b.brewery} </p>
                </div>
            )}
          <h2> Reviews</h2>
          <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <label> Enter your review:
                      <textarea placeholder="Review" {...register("review")} />
                  </label>
                  <input type="hidden" name="beerId" {...register("beerId", {value : beerId})} />
                  <input type="submit" value="Post Review" />
              </form>
          </div>
          {reviews.map((r) =>
                <div key={r.id}>
                    <p> Review : {r.review} </p>
                </div>
            )}
      </div>
  );
}

export default Details;