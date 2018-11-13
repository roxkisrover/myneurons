import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'antd';

const ButtonNext = ({ batchCount, batchIndex, handleButtonNextClick }) => (
  <Button disabled={batchCount - batchIndex <= 1} onClick={handleButtonNextClick}>
    Дальше <Icon type="right" />
  </Button>
);

ButtonNext.propTypes = {
  batchCount: PropTypes.number.isRequired,
  batchIndex: PropTypes.number.isRequired,
  handleButtonNextClick: PropTypes.func.isRequired,
};

export default ButtonNext;
