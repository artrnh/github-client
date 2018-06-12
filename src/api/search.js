import githubApi from './configureApi';

export default {
  searchRepos: ({ q, page }) => githubApi.get('search/repositories', {
    params: { q, page },
  }),
};
