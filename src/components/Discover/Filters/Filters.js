import React from 'react';
import { Card, Form, Input, Radio, Select, DatePicker, Checkbox, InputNumber } from 'antd';
import styled from 'styled-components';

const FormItem = Form.Item;
const { Option } = Select;
const RadioGroup = Radio.Group;
const Filters = () => (
  <FilterCard>
    <FilterForm layout="horizontal">
      <FormItem label="Language">
        <Select
          name="language"
          defaultValue="JavaScript"
        >
          <Option value="JavaScript">JavaScript</Option>
        </Select>
      </FormItem>
      <FormItem label="Owner">
        <Input
          name="owner"
          placeholder="Username or organization"
        />
      </FormItem>
      <FormItem label="Stars">
        <InputNumber
          name="stars"
          min={0}
          defaultValue={0}
        />
      </FormItem>
      <FormItem label="Forks">
        <InputNumber
          name="forks"
          min={0}
          defaultValue={0}
        />
      </FormItem>
      <FormItem label="Updated after">
        <DatePicker />
      </FormItem>
      <RadioButtonsContainer label="Type">
        <RadioButtons defaultValue="All">
          <Radio value="All">All</Radio>
          <Radio value="Forks">Forks</Radio>
          <Radio value="Sources">Sources</Radio>
        </RadioButtons>
      </RadioButtonsContainer>
      <Others label="Others">
        <Checkbox>Has open issues</Checkbox>
        <Checkbox>Has topics</Checkbox>
      </Others>
    </FilterForm>
  </FilterCard>
);

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

  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
`;

export default Filters;
