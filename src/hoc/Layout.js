import React from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';

import media from '../utils/media';

const Layout = (props) => {
  const onItemSelect = ({ key }) => {
    props.history.push(`/${key}`);
  };

  const activeTab = [props.location.pathname.slice(1)];

  return (
    <Container>
      <MenuBar
        mode="horizontal"
        defaultSelectedKeys={activeTab}
        onSelect={onItemSelect}
      >
        <Menu.Item key="profile">
          <Icon type="user" />Profile
        </Menu.Item>
        <Menu.Item key="discover">
          <Icon type="compass" />Discover
        </Menu.Item>
      </MenuBar>
      {props.children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  ${media.desktop`width: auto;`}
`;

const MenuBar = styled(Menu)`
  margin-bottom: 15px;
`;

export default withRouter(Layout);
