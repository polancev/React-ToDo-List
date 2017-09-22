import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const SharedBox = ({onClick}) => (
  <Button className="borderless" onClick={onClick}>
    <i className="fa fa-square-o button-icon" aria-hidden="true"/>
  </Button>
);

SharedBox.propTypes = {
  onClick: PropTypes.func
};

export default SharedBox;
