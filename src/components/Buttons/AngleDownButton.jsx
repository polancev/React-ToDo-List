import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AngleDownButton = ({onClick}) => (
  <Button className="category__down" onClick={onClick}>
    <i className="fa fa-angle-down" aria-hidden="true"/>
  </Button>
);

AngleDownButton.propTypes = {
  onClick: PropTypes.func
};

export default AngleDownButton;
