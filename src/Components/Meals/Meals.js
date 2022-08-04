import React, { useState } from 'react';
import AvailableMeals from './AvailableMeals';
import CreateMealModal from './CreateMealModal';
import MealsSummary from './MealsSummary';

const Meals = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const createMealFormHandler = () => {
    setIsFormShown(true);
  };
  const hideCreateMealFormHandler = () => {
    setIsFormShown(false);
  };
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals onShowCreateMealForm={createMealFormHandler} />
      {isFormShown && <CreateMealModal onClose={hideCreateMealFormHandler} />}
    </React.Fragment>
  );
};

export default Meals;
