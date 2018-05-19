import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

import Card from './Card/Card';

const CardsList = (props) => {
  if (props.loading) return <Spinner size="large" />;
  const cards = props.repos.map(repo => (
    <Card
      key={repo.id}
      name={repo.name}
      descr={repo.description}
      fork={repo.fork}
      stars={repo.stargazers_count}
      forks={repo.forks}
      updated={repo.updated_at}
      language={repo.language}
    />
  ));

  return (
    <Cards>
      {cards}
    </Cards>
  );
};

CardsList.propTypes = {
  repos: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]).isRequired,
  loading: PropTypes.bool.isRequired,
};

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Spinner = styled(Spin)`
  margin: 50px 0 0 50% !important;
`;

const mapStateToProps = state => ({
  repos: state.repositories.repos,
  loading: state.repositories.loading,
});

export default connect(mapStateToProps)(CardsList);
