import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const inputToSend = ({ registerHookForm }) => {
  const { pricesData, setCurrencyValue01, setTheMoney } = useContext(MyContext);

  const handleSelectPrice = (value) => {
    let getPrice = pricesData.filter((item) => {
      return item.currency === value;
    });
    setCurrencyValue01(getPrice[0].price);
  };

  return (
    <div>
      <h5
        className="mb-2"
        style={{ fontWeight: 'bold', color: '#5C5470', fontSize: '18px' }}
        for="input-amount"
      >
        Amount to send
      </h5>
      <div className="d-flex">
        <select
          className="border rounded me-2"
          style={{ fontSize: '13px' }}
          aria-label="Default select example"
          onChange={(e) => handleSelectPrice(e.target.value)}
        >
          <option selected>Currency</option>
          {pricesData &&
            pricesData.map((price) => (
              <option value={price.currency}>{price.currency}</option>
            ))}
        </select>
        <input
          type="number"
          class="form-control"
          aria-label="Text input with dropdown button"
          {...registerHookForm('inputTheMoney', {
            onChange: (e) => setTheMoney(e.target.value)
          })}
          // onChange={(e) => }
        />
      </div>
    </div>
  );
};

export default inputToSend;
