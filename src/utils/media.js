import { css } from 'styled-components';

const sizes = {
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media;
