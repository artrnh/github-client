import React, { Component } from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import { updateForm, fetchRepos } from '../../../store/actions/search';

const { Search } = Input;
const FormItem = Form.Item;
class SearchInput extends Component {
  static propTypes = {
    form: PropTypes.shape({
      getFieldDecorator: PropTypes.func,
    }).isRequired,
    search: PropTypes.shape({
      value: PropTypes.string,
    }).isRequired,
    filters: PropTypes.shape({
      date: PropTypes.object,
      forks: PropTypes.object,
      hasOpenedIssues: PropTypes.object,
      hasTopics: PropTypes.object,
      language: PropTypes.object,
      owner: PropTypes.object,
      stars: PropTypes.object,
      type: PropTypes.object,
    }).isRequired,
    fetchRepos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    const { search, filters } = this.props;
    this.props.fetchRepos(search.value, filters);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.fetchRepos();
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem label="Search by repository">
          {getFieldDecorator('search')(<Search
            placeholder="Search..."
            size="large"
          />)}
        </FormItem>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search.input,
  filters: state.filters.fields,
});

const mapDispatchToProps = dispatch => ({
  onChange: changedFields => dispatch(updateForm(changedFields.search)),
  fetchRepos: _.debounce((query, filters) => dispatch(fetchRepos(query, filters)), 750),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
  onValuesChange(props, { search }) {
    props.fetchRepos(search, props.filters);
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
})(SearchInput));
