import slugify from 'slugify';
import { useCallback } from 'react';

import { useAsync } from 'hooks';
import { useGetAll } from 'hooks/services';

export const useHome = () => {
  const getAll = useGetAll();
  const promise = useCallback(
    settings =>
      getAll(settings).then(({ results }) =>
        results.map(result => ({
          fetch: () => getAll(result),
          ...result,
        }))
      ),
    [getAll]
  );
  const { resolve: fetch, ...searching } = useAsync({ promise });
  const search = useCallback(
    event => {
      const {
        target: {
          keywords: { value: keywords },
        },
      } = event;

      event.preventDefault();

      return fetch({ name: slugify(keywords) });
    },
    [fetch]
  );

  return { searching, search };
};
