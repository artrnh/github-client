import React from 'react';
import { Card as AntdCard, Icon, Divider } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { mapProps } from 'recompose';

import media from '../../../../utils/media';
import langColors from './langColors.json';
import { roundStr, roundNum } from '../../../../utils/rounders';

const Card = props => (
  <RepoCard to="/discover">
    <AntdCard
      title={props.name}
      extra={props.fork && <Icon type="fork" />}
    >
      {roundStr(props.descr)}
      <Divider />
      <Stats>
        <Info>
          <Language language={props.language}>{props.language}</Language>
        </Info>
        <Info>
          <Icon type="star" style={{ marginRight: 5 }} />
          {roundNum(props.stars)}
        </Info>
        <Info>
          <Icon type="fork" style={{ marginRight: 5 }} />
          {roundNum(props.forks)}
        </Info>
      </Stats>
    </AntdCard>
  </RepoCard>
);


Card.propTypes = {
  name: PropTypes.string.isRequired,
  descr: PropTypes.string,
  fork: PropTypes.bool,
  language: PropTypes.string,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};

Card.defaultProps = {
  descr: '',
  fork: false,
  language: 'Other',
};

const RepoCard = styled(Link)`
  width: 32%;
  margin-bottom: 20px !important;
  transition: transform .2s;
  text-decoration: none !important;
  overflow: hidden;

  :hover {
    transform: scale(1.05);
  }

  ${media.lg`width: 48%;`}
  ${media.md`width: 100%;`}

  .ant-card {
    height: 100%;
  }

  .ant-card-body {
    height: calc(100% - 56px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;

const Info = styled.span`
  margin-right: 8px;
`;

const Language = styled.span`
  position: relative;
  display: inline-block;
  padding-left: 17px;

  ::before {
    content: "";
    position: absolute;
    display: block;
    top: 4px;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => langColors[props.language]};
  }
`;

export default mapProps(props => ({
  ...props,
  descr: props.descr || 'There is no description',
  fork: props.fork || false,
  language: props.language || 'Other',
}))(Card);
