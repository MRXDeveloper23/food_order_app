import React from 'react';
import classes from './CreateMealForm.module.css';

const CreateMealForm = () => {
  return (
    <form className={classes.form}>
      <label htmlFor="name">Meal name: </label>
      <input id="name" type="text" />
      <label htmlFor="description">description: </label>
      <textarea id="description" rows="8" />
      <label htmlFor="price">price: </label>
      <input id="price" type="text" />
    </form>
  );
};

export default CreateMealForm;
