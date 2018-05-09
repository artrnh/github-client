import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SearchInput from './SearchInput/SearchInput';
import { changeValue } from '../../store/actions/search';

const Search = props => (
  <div>
    <SearchInput
      value={props.inputValue}
      onChange={props.changeInputValue}
    />
  </div>
);

Search.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeInputValue: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    inputValue: state.search.value,
  }
);

export default connect(mapStateToProps, { changeInputValue: changeValue })(Search);
