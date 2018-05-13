import React, { Fragment } from 'react';
import { Card, Form, Input, Radio, Select, DatePicker, Checkbox, InputNumber } from 'antd';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { updateForm } from '../../../store/actions/filters';

const FormItem = Form.Item;
const { Option } = Select;
const RadioGroup = Radio.Group;
const Filters = (props) => {
  const { getFieldDecorator } = props.form;
  const options = (<Option value="JavaScript">JavaScript</Option>);
  const radioBtns = (
    <Fragment>
      <Radio value="All">All</Radio>
      <Radio value="Forks">Forks</Radio>
      <Radio value="Sources">Sources</Radio>
    </Fragment>
  );

  return (
    <FilterCard>
      <FilterForm layout="horizontal">
        <FormItem label="Language">
          {getFieldDecorator('language')(<Select>{options}</Select>)}
        </FormItem>
        <FormItem label="Owner">
          {getFieldDecorator('owner')(<Input placeholder="Username or organization" />)}
        </FormItem>
        <FormItem label="Stars">
          {getFieldDecorator('stars')(<InputNumber min={0} />)}
        </FormItem>
        <FormItem label="Forks">
          {getFieldDecorator('forks')(<InputNumber min={0} />)}
        </FormItem>
        <FormItem label="Updated after">
          {getFieldDecorator('date')(<DatePicker />)}
        </FormItem>
        <RadioButtonsContainer label="Type">
          {getFieldDecorator('type')(<RadioButtons>{radioBtns}</RadioButtons>)}
        </RadioButtonsContainer>
        <Others label="Others">
          {getFieldDecorator('hasOpenedIssues')(<Checkbox>Has opened issues</Checkbox>)}
        </Others>
        <FormItem>
          {getFieldDecorator('hasTopics')(<Checkbox>Has topics</Checkbox>)}
        </FormItem>
      </FilterForm>
    </FilterCard>
  );
};

Filters.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func.isRequired,
  }).isRequired,
};

const FilterForm = styled(Form)`
  width: 200px;

  .ant-form-item {
    margin: 0;
  }

  .ant-form-item-label {
    line-height: 30px;
    margin-top: 5px;
  }
`;

const FilterCard = styled(Card)`
  width: 250px;

  .ant-card-body {
    padding: 10px 20px;
  }
`;

const RadioButtonsContainer = styled(FormItem)`
  .ant-form-item-control {
    line-height: 30px;
  }
`;

const RadioButtons = styled(RadioGroup)`
  width: 100px;
`;

const Others = styled(FormItem)`
  .ant-form-item-control {
    line-height: 30px;
  }
`;

const mapStateToProps = state => ({
  fields: state.filters.fields,
});

const mapDispatchToProps = dispatch => ({
  onChange: fields => dispatch(updateForm(fields)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      language: Form.createFormField({
        ...props.fields.language,
        value: props.fields.language.value,
      }),
      owner: Form.createFormField({
        ...props.fields.owner,
        value: props.fields.owner.value,
      }),
      stars: Form.createFormField({
        ...props.fields.stars,
        value: props.fields.stars.value,
      }),
      forks: Form.createFormField({
        ...props.fields.forks,
        value: props.fields.forks.value,
      }),
      date: Form.createFormField({
        ...props.fields.date,
        value: props.fields.date.value,
      }),
      type: Form.createFormField({
        ...props.fields.type,
        value: props.fields.type.value,
      }),
      hasOpenedIssues: Form.createFormField({
        ...props.fields.hasOpenedIssues,
        value: props.fields.hasOpenedIssues.value,
      }),
      hasTopics: Form.createFormField({
        ...props.fields.hasTopics,
        value: props.fields.hasTopics.value,
      }),
    };
  },
})(Filters));
