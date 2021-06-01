import { create } from 'axios';
import { useMemo } from 'react';

import { intercept } from './helpers';

export default () => {
  const client = useMemo(() => {
    const instance = create({ baseURL: 'https://pokeapi.co/api/v2/pokemon/' });

    instance.interceptors.response.use(intercept);

    return instance;
  }, []);

  return client;
};
