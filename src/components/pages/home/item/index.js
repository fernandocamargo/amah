import { string } from 'prop-types';
import React, { useCallback } from 'react';

import { Loader, Pokemon } from 'components/widgets';

import { useItem } from './hooks';
import withStyle from './style';

export const Item = ({ className, ...props }) => {
  const { fetching } = useItem(props);
  const Display = useCallback(() => {
    switch (true) {
      case !!fetching.loading:
        return <Loader />;
      case !!fetching.data:
        return <Pokemon {...fetching.data} />;
      default:
        return false;
    }
  }, [fetching]);

  return (
    <article className={className}>
      <Display />
    </article>
  );
};

Item.propTypes = {
  className: string.isRequired,
};

Item.defaultProps = {};

export default withStyle(Item);
