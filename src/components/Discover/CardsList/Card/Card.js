import React from 'react';
import { Card as AntdCard, Icon, Divider } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import media from '../../../../utils/media';
import langColors from './langColors.json';

const Card = props => (
  <RepoCard to="/discover">
    <AntdCard
      title={props.name}
      extra={props.fork ? <Icon type="fork" /> : null}
    >
      {props.descr}
      <HorisontalDivider />
      <Stats>
        <Info>
          <Language language={props.language}>{props.language}</Language>
        </Info>
        <Info>
          <Icon type="star" style={{ marginRight: 5 }} />
          {props.stars}
        </Info>
        <Info>
          <Icon type="fork" style={{ marginRight: 5 }} />
          {props.forks}
        </Info>
      </Stats>
    </AntdCard>
  </RepoCard>
);


Card.propTypes = {
  name: PropTypes.string.isRequired,
  descr: PropTypes.string,
  fork: PropTypes.bool,
  language: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  forks: PropTypes.number.isRequired,
};

Card.defaultProps = {
  descr: 'Sorry, there\'s no description provided',
  fork: false,
};

const RepoCard = styled(Link)`
  width: 30%;
  margin-bottom: 20px !important;
  transition: transform .2s;
  text-decoration: none !important;
  overflow: hidden;

  :hover {
    transform: scale(1.05);
  }

  ${media.lg`width: 48%;`}
  ${media.md`width: 95%;`}
  ${media.sm`width: 100%;`}
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
`;

const Info = styled.span`
  margin-right: 8px;
`;

const HorisontalDivider = styled(Divider)`
  margin: 16px 0 !important;
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

export default Card;
