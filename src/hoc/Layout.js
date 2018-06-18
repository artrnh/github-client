import React from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { compose, withHandlers, mapProps } from 'recompose';

import media from '../utils/media';

const Layout = props => (
  <Container>
    <MenuBar
      mode="horizontal"
      openKeys={[props.activeTab]}
      selectedKeys={[props.activeTab]}
      onSelect={props.handleItemSelect}
    >
      <Menu.Item key="profile">
        <Icon type="user" />
        Profile
      </Menu.Item>
      <Menu.Item key="discover">
        <Icon type="compass" />
        Discover
      </Menu.Item>
    </MenuBar>
    {props.children}
  </Container>
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  handleItemSelect: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

  ${media.xl`width: auto;`}
`;

const MenuBar = styled(Menu)`
  margin-bottom: 15px;
`;

export default compose(
  withRouter,

  mapProps(props => ({
    ...props,
    activeTab: props.location.pathname.slice(1),
  })),

  withHandlers({
    handleItemSelect: props => (e) => {
      props.history.push(`/${e.key}`);
    },
  }),
)(Layout);
