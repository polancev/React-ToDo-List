import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const DeleteButton = ({onClick}) => (
  <Button className="bordered" onClick={onClick}>
    <i className="fa fa-trash-o button-icon" aria-hidden="true"/>
  </Button>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func
};

export default DeleteButton;
