import React from 'react';
import { Input, Form } from 'antd';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateForm } from '../../../store/actions/search';

const { Search } = Input;
const FormItem = Form.Item;
const SearchInput = (props) => {
  const { getFieldDecorator } = props.form;

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
};

SearchInput.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  search: state.search.input,
});

const mapDispatchToProps = dispatch => ({
  onChange: changedFields => dispatch(updateForm(changedFields.search)),
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
