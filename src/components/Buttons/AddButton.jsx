import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AddButton = ({onClick}) => (
  <Button className="category__add" onClick={onClick}>
    <i className="fa fa-plus" aria-hidden="true"></i>
  </Button>
);

AddButton.propTypes = {
  onClick: PropTypes.func
};

export default AddButton;
