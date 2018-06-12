import axios from 'axios';
import qs from 'qs';

const githubApi = axios.create({
  baseURL: 'https://api.github.com/',
  paramsSerializer: params => qs.stringify(params, { encode: false }),
});

export default githubApi;
