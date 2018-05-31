import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Card from './Card/Card';
import { fetchMoreRepos } from '../../../store/actions/search';
import withInfiniteScroll from '../../../hoc/withInfiniteScroll';
import Spinner from '../../UI/Spinner';

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

const mapStateToProps = state => ({
  repos: state.repositories.repos,
  loading: state.repositories.loading,
  loadingMore: state.repositories.loadingMore,
  page: state.repositories.page,
  query: state.search.input.value,
  filters: state.filters.fields,
});

const mapDispatchToProps = dispatch => ({
  paginatedSearch: _.throttle((query, filters, page) =>
    dispatch(fetchMoreRepos(query, filters, page))),
});

export default connect(mapStateToProps, mapDispatchToProps)(withInfiniteScroll(CardsList));
