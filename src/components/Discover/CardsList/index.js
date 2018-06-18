import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { compose, branch, renderComponent } from 'recompose';

import Card from './Card';
import { fetchMoreRepos } from '../../../store/actions';
import withInfiniteScroll from '../../../hoc/withInfiniteScroll';
import Spinner from '../../UI/Spinner';
import Error from '../../UI/Error';

const CardsList = (props) => {
  if (!props.repos.length) {
    return (<NoData>No repositories found, please try another query or filters.</NoData>);
  }

  return (
    <Cards>
      {
        props.repos.map(repo => (
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
        ))
      }
    </Cards>
  );
};

CardsList.propTypes = {
  repos: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const NoData = styled.p`
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
`;

const mapStateToProps = state => ({
  repos: state.repositories.repos,
  loading: state.repositories.loading,
  loadingMore: state.repositories.loadingMore,
  error: state.repositories.error,
  page: state.repositories.page,
  query: state.search.input.value,
  filters: state.filters.fields,
  incompleteResults: state.repositories.incompleteResults,
});

const mapDispatchToProps = dispatch => ({
  fetchMoreRepos: throttle((query, filters, page) =>
    dispatch(fetchMoreRepos(query, filters, page))),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withInfiniteScroll(),
  branch(
    props => props.loading,
    renderComponent(Spinner),
    branch(
      props => props.error,
      renderComponent(props => <Error {...props.error} />),
    ),
  ),
)(CardsList);
