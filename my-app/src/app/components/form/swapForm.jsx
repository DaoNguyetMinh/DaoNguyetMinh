import React, { useContext, useState } from 'react';
import InputToSend from '../toSend/inputToSend';
import InputToReceive from '../toReceive/inputToReceive';
import MyContext from '../context/MyContext';
import { currencySwap } from '../hooks/currencySwap';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const swapForm = () => {
  const { currencyValue01, currencyValue02, theMoney } = useContext(MyContext);
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState();

  const onSubmit = (data, e) =>
    setResult(currencySwap(currencyValue01, currencyValue02, theMoney));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <div className="shadow-sm p-3  bg-light rounded">
                <InputToSend registerHookForm={register} />
              </div>
            </div>
            <div className="col-auto">
              <div>
                <Image
                  src={'/img/arrow.png'}
                  width={50}
                  height={50}
                  alt="arrow-img"
                />
              </div>
            </div>
            <div className="col">
              <div className="shadow-sm p-3 bg-light rounded">
                <InputToReceive result={result} />
              </div>
            </div>
          </div>
          <button
            className="btn mt-3"
            style={{
              backgroundColor: '#1D267D',
              color: 'white',
              fontWeight: 'bold'
            }}
            type="submit"
          >
            Confirm swap
          </button>
        </div>
      </form>
    </div>
  );
};

export default swapForm;
