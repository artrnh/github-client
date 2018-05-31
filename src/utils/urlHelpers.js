import _ from 'lodash';

const normalizeFilters = (filters) => {
  const filterValues = _.mapValues(filters, obj => obj.value);
  const normalized = _.transform(filterValues, (acc, value, key) => {
    switch (key) {
      case 'language':
        acc.language = value;
        break;

      case 'owner':
        if (!value) break;
        acc.user = value || '';
        acc.org = value || '';
        break;

      case 'stars':
        acc.stars = `>=${value}`;
        break;

      case 'forks':
        acc.forks = `>=${value}`;
        break;

      case 'date':
        if (!value) break;
        acc.pushed = value || '';
        break;

      case 'type':
        acc.fork = value;
        break;

      case 'hasOpenedIssues':
        if (value) acc['help-wanted-issues'] = '>0';
        break;

      case 'hasTopics':
        if (value) acc.topics = '>0';
        break;

      default:
        acc[key] = value;
        break;
    }
  }, {});

  return normalized;
};

export default (query, filters, page = 1) => {
  const q = query ? `${query}+` : '';
  const searchParams = Object.entries(normalizeFilters(filters)).map(([key, value]) => `${key}:${value}`).join('+');

  return `https://api.github.com/search/repositories?q=${q}${searchParams}&page=${page}`;
};
