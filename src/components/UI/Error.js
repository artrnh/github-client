import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = ({ status, statusText }) => (
  <Wrapper>
    <h2>Oops! An error occured, please try arain later...</h2>
    <p>Error {status}, {statusText}</p>
  </Wrapper>
);

Error.propTypes = {
  status: PropTypes.number.isRequired,
  statusText: PropTypes.string.isRequired,
};

const Wrapper = styled.div`
  margin: 30px 0;
  text-align: center;
`;

export default Error;
