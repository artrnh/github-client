import React, { Component } from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateForm, fetchRepos } from '../../../store/actions/search';
import buildUrl from '../../../utils/urlHelpers';

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
      date: PropTypes.shape({
        value: PropTypes.object,
      }),
      forks: PropTypes.shape({
        value: PropTypes.number,
      }),
      hasOpenedIssues: PropTypes.shape({
        value: PropTypes.bool,
      }),
      hasTopics: PropTypes.shape({
        value: PropTypes.bool,
      }),
      language: PropTypes.shape({
        value: PropTypes.string,
      }),
      owner: PropTypes.shape({
        value: PropTypes.string,
      }),
      stars: PropTypes.shape({
        value: PropTypes.number,
      }),
      type: PropTypes.shape({
        value: PropTypes.string,
      }),
    }).isRequired,
    fetchRepos: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.fetchRepos();
  }

  fetchRepos = () => {
    const { search, filters } = this.props;
    const url = buildUrl(search.value, filters);
    this.props.fetchRepos(url);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form>
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
  fetchRepos: (query, filters) => dispatch(fetchRepos(query, filters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
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
