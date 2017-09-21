import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


const CheckedBox = ({onClick}) => (
  <Button className="borderless" onClick={onClick}>
    <i className="fa fa-check-square-o button-icon" aria-hidden="true"/>
  </Button>
);

CheckedBox.propTypes = {
  onClick: PropTypes.func
};

export default CheckedBox;
