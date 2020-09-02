import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

export const Loader = ({ className }) => (
  <p className={className}>Loading...</p>
);

Loader.propTypes = {
  className: string.isRequired,
};

Loader.defaultProps = {};

export default withStyle(Loader);
