import { useCallback, useEffect, useRef, useState } from 'react';

import { attempt, fail, getInitialState, succeed } from './reducers';

import { Validity } from './helpers';

export default ({ promise }) => {
  const { current: controller } = useRef(new AbortController());
  const [state, setState] = useState(getInitialState());
  const resolve = useCallback(
    (...params) => {
      const { check, expire } = new Validity();
      const abort = () => controller.abort();

      new Promise((resolve, reject) =>
        check(promise(...params))
          .then(data => {
            setState(succeed(data));

            return resolve(data);
          })
          .catch(error => {
            setState(fail(error));

            return reject(error);
          })
          .finally(() => controller.signal.removeEventListener('abort', expire))
      );

      controller.signal.addEventListener('abort', expire);

      setState(attempt({ params }));

      return abort;
    },
    [promise, controller]
  );

  useEffect(() => () => controller.abort(), [controller]);

  return { ...state, resolve };
};
