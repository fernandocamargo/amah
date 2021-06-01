import { useEffect } from 'react';

import { useAsync } from 'hooks';

export const useItem = ({ fetch: promise, ...props }) => {
  const { resolve: fetch, ...fetching } = useAsync({ promise });

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { fetching };
};
