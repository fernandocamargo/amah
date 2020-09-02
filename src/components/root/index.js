import React from 'react';
import { ThemeProvider as Theming } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import theme from 'theme';
import { App } from 'components';

export const Root = () => (
  <Theming theme={theme}>
    <Router>
      <App />
    </Router>
  </Theming>
);

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
