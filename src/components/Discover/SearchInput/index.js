import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import { compose, lifecycle, withHandlers } from 'recompose';

import { updateSearchForm, fetchRepos } from '../../../store/actions';

const { Search } = Input;
const FormItem = Form.Item;
const SearchInput = (props) => {
  const { getFieldDecorator } = props.form;

  return (
    <Form onSubmit={props.handleSubmit}>
      <FormItem label="Search by repository name and description">
        {getFieldDecorator('search')(<Search
          placeholder="Search..."
          size="large"
        />)}
      </FormItem>
    </Form>
  );
};

SearchInput.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  search: state.search.input,
  filters: state.filters.fields,
});

const mapDispatchToProps = dispatch => ({
  onChange: changedFields => dispatch(updateSearchForm(changedFields.search)),
  fetchReposImmediate: (query, filters) => dispatch(fetchRepos(query, filters)),
  fetchReposDebounced: debounce((query, filters) => dispatch(fetchRepos(query, filters)), 750),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    handleSubmit: props => (e) => {
      e.preventDefault();
      const { search, filters, fetchReposImmediate } = props;
      fetchReposImmediate(search.value, filters);
    },
  }),

  lifecycle({
    componentDidMount() {
      const { search, filters, fetchReposImmediate } = this.props;
      fetchReposImmediate(search.value, filters);
    },
  }),

  Form.create({
    onValuesChange(props, { search }) {
      props.fetchReposDebounced(search, props.filters);
    },
    onFieldsChange(props, changedFields) {
      props.onChange(changedFields);
    },
    mapPropsToFields(props) {
      return {
        search: Form.createFormField({
          ...props.search,
          value: props.search.value,
        }),
      };
    },
  }),
)(SearchInput);
