import React, { Fragment } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const { Search } = Input;
const SearchInput = props => (
  <Fragment>
    <Label>Search by repository name</Label>
    <Search
      placeholder="Search..."
      size="large"
      enterButton
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  </Fragment>
);

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const Label = styled.p`
  margin-bottom: 5px;
`;

export default SearchInput;
