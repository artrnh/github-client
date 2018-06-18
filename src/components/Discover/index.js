import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

import SearchInput from './SearchInput';
import Filters from './Filters';
import CardsList from './CardsList';
import media from '../../utils/media';

const Discover = () => (
  <Container>
    <SearchInput />
    <Row>
      <Col
        md={{ span: 7 }}
        lg={{ span: 5 }}
      >
        <Filters />
      </Col>
      <Col
        md={{ span: 16, offset: 1 }}
        lg={{ span: 18, offset: 1 }}
      >
        <CardsList />
      </Col>
    </Row>
  </Container>
);

const Container = styled.div`
  ${media.md`padding: 0 10px;`}
`;

export default Discover;
