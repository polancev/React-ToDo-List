import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const MoveButton = ({onClick}) => (
  <Button className="borderless" onClick={onClick}>
    <i className="fa fa-share-square-o button-icon" aria-hidden="true"/>
  </Button>
);

MoveButton.propTypes = {
  onClick: PropTypes.func
};

export default MoveButton;