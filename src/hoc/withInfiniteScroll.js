import React from 'react';
import { compose, lifecycle, withHandlers } from 'recompose';

import Spinner from '../components/UI/Spinner';

const enhance = compose(
  withHandlers({
    handleScroll: props => () => {
      if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
        props.repos.length &&
        !props.loading &&
        !props.loadingMore
      ) props.fetchMoreRepos(props.query, props.filters, props.page + 1);
    },
  }),

  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.handleScroll);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.handleScroll);
    },
  }),
);

export default () => Component => enhance(props => (
  <div>
    <Component {...props} />
    {props.loadingMore && <Spinner />}
  </div>
));
