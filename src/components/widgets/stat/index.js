import { string } from 'prop-types';
import React from 'react';

import withStyle from './style';

export const Stat = ({ stat: { name }, className, base_stat }) => (
  <dl className={className}>
    <dt>{name}</dt>
    <dd>
      <progress max="100" value={base_stat}>
        {base_stat}%
      </progress>
    </dd>
  </dl>
);

Stat.propTypes = {
  className: string.isRequired,
};

Stat.defaultProps = {};

export default withStyle(Stat);
