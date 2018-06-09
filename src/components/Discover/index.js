import React from 'react';
import { Row, Col } from 'antd';

import SearchInput from './SearchInput';
import Filters from './Filters';
import CardsList from './CardsList';

const Discover = () => (
  <div>
    <SearchInput />
    <Row>
      <Col
        sm={{ span: 9 }}
        md={{ span: 7 }}
        lg={{ span: 5 }}
      >
        <Filters />
      </Col>
      <Col
        sm={{ span: 14, offset: 1 }}
        md={{ span: 16, offset: 1 }}
        lg={{ span: 18, offset: 1 }}
      >
        <CardsList />
      </Col>
    </Row>
  </div>
);

export default Discover;
