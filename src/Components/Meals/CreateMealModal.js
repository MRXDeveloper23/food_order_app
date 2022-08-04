import React from 'react';
import Modal from '../UI/Modal';
import CreateMealForm from './CreateMealForm';

const CreateMealModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <CreateMealForm />
    </Modal>
  );
};

export default CreateMealModal;
