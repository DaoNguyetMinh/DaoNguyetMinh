'use client';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MyContext from './components/context/MyContext';
import SwapForm from './components/form/swapForm';

export default function Home() {
  const [pricesData, setPricesData] = useState();
  const [currencyValue01, setCurrencyValue01] = useState();
  const [currencyValue02, setCurrencyValue02] = useState();
  const [theMoney, setTheMoney] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://interview.switcheo.com/prices.json'
      );
      setPricesData(response.data);
    } catch (error) {
      console.error('Error fetching Data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log('theMoney', theMoney);

  return (
    <MyContext.Provider
      value={{
        pricesData,
        currencyValue01,
        setCurrencyValue01,
        currencyValue02,
        setCurrencyValue02,
        theMoney,
        setTheMoney
      }}
    >
      <h1 className="mb-5" style={{ color: '#0C134F', fontWeight: 'bold' }}>
        Currency Swap Form
      </h1>
      <div>
        <SwapForm />
      </div>
    </MyContext.Provider>
  );
}
