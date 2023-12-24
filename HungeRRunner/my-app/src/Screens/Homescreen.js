import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pizza from '../components/Pizza';
import { getAllPizzas } from '../actions/PizzaActions';

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducers); // Fix the typo here
  const { pizzas, error, loading } = pizzasstate || {};

  useEffect(() => {
    dispatch(getAllPizzas());
    console.log("Redux Store: ", pizzasstate);
  }, []);
  
  useEffect(() => {
    console.log(pizzas);
  }, [pizzas]); // Include pizzas in the dependency array

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : pizzas ? (
          pizzas.map((pizza) => (
            <div className="col-md-3 m-3" key={pizza._id}>
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          ))
        ) : (
          <h1>No pizzas found</h1>
        )}
      </div>
    </div>
  );
}
