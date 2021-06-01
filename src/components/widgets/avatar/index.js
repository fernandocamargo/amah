import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

export const Avatar = ({ className, src, caption }) => (
  <figure className={className}>
    <img src={src} alt={caption} title={caption} />
    <figcaption>{caption}</figcaption>
  </figure>
);

Avatar.propTypes = {
  className: string.isRequired,
  src: string.isRequired,
  caption: string,
};

Avatar.defaultProps = {};

export default withStyle(Avatar);
