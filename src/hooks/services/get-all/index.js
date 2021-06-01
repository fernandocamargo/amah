import { useCallback } from 'react';

import { usePokeAPI } from 'hooks/clients';

export default () => {
  const { get } = usePokeAPI();
  const API = useCallback(({ name }) => get(name ? `/${name}` : '/'), [get]);

  return API;
};
