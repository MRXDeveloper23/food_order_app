import React from 'react';
import { useRef, useState } from 'react';
import Input from '../../UI/Input';

import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredInput = amountInputRef.current.value;
    const enteredInputNumber = +enteredInput;
    if (
      enteredInput.trim().length === 0 ||
      enteredInputNumber < 1 ||
      enteredInputNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredInputNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          type: 'number',
          id: 'amount_' + props.id,
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please input valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
