import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../components/UI/Spinner';

const withInfiniteScroll = Component =>
  class WithInfiniteScroll extends React.Component {
    static propTypes = {
      repos: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.arrayOf(PropTypes.object),
      ]).isRequired,
      loadingMore: PropTypes.bool.isRequired,
      paginatedSearch: PropTypes.func.isRequired,
      query: PropTypes.string.isRequired,
      filters: PropTypes.shape({
        date: PropTypes.object,
        forks: PropTypes.object,
        hasOpenedIssues: PropTypes.object,
        hasTopics: PropTypes.object,
        language: PropTypes.object,
        owner: PropTypes.object,
        stars: PropTypes.object,
        type: PropTypes.object,
      }).isRequired,
      page: PropTypes.number.isRequired,
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200) &&
        this.props.repos.length &&
        !this.props.loadingMore
      ) {
        this.props.paginatedSearch(this.props.query, this.props.filters, this.props.page + 1);
      }
    }

    render() {
      return (
        <div>
          <Component {...this.props} />
          {this.props.loadingMore ? <Spinner size="large" /> : null}
        </div>
      );
    }
  };

export default withInfiniteScroll;
