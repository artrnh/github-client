import React from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Spinner = props => (
  <Wrapper>
    <Spin size={props.size} />
  </Wrapper>
);

Spinner.defaultProps = {
  size: 'large',
};

Spinner.propTypes = {
  size: PropTypes.string,
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

export default Spinner;
