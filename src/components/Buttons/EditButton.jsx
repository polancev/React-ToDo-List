import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const EditButton = ({onClick}) => (
  <Button className="bordered" onClick={onClick}>
    <i className="fa fa-pencil-square-o button-icon" aria-hidden="true"></i>
  </Button>
);

EditButton.propTypes = {
  onClick: PropTypes.func
};

export default EditButton;
