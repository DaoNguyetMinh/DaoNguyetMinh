import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

const inputToReceive = ({ result }) => {
  const { pricesData, setCurrencyValue02 } = useContext(MyContext);
  const handleSelectCurrency = (value) => {
    let getPrice = pricesData.filter((item) => {
      return item.currency === value;
    });
    setCurrencyValue02(getPrice[0].price);
  };
  return (
    <div>
      <h5
        className="mb-2"
        style={{ fontWeight: 'bold', color: '#5C5470', fontSize: '18px' }}
        for="input-amount"
      >
        Amount to receive
      </h5>
      <div class="d-flex">
        <select
          className="border rounded me-2"
          style={{ fontSize: '13px', height: '37.6px' }}
          aria-label="Default select example"
          onChange={(e) => handleSelectCurrency(e.target.value)}
        >
          <option selected>Currency</option>
          {pricesData &&
            pricesData.map((price) => (
              <option value={price.currency}> {price.currency} </option>
            ))}
        </select>
        <div className="form-control border-0">{result}</div>
      </div>
    </div>
  );
};

export default inputToReceive;
