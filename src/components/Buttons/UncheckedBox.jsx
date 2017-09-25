import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const UnCheckedBox = ({onClick}) => (
  <Button className="borderless" onClick={onClick}>
    <i className="fa fa-square-o button-icon unchecked-box" aria-hidden="true"/>
  </Button>
);

UnCheckedBox.propTypes = {
  onClick: PropTypes.func
};

export default UnCheckedBox;
