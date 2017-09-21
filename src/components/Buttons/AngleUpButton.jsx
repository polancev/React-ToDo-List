import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AngleUpButton = ({onClick}) => (
  <Button className="category__down" onClick={onClick}>
    <i className="fa fa-angle-up" aria-hidden="true"/>
  </Button>
);

AngleUpButton.propTypes = {
  onClick: PropTypes.func
};

export default AngleUpButton;
