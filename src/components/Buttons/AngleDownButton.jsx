import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const AngleDownButton = ({onClick}) => (
  <Button className="borderless" onClick={onClick}>
    <i className="fa fa-angle-down button-icon" aria-hidden="true"/>
  </Button>
);

AngleDownButton.propTypes = {
  onClick: PropTypes.func
};

export default AngleDownButton;
