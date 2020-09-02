import { string } from 'prop-types';
import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes, NavLink, Route } from 'react-router-dom';

import { Details, Home, NotFound } from 'components/pages';
import { Loader } from 'components/widgets';

import withStyle from './style';

export const App = ({ className }) => (
  <div className={className}>
    <header>
      <h1>
        <NavLink to="/" title="Pokémon challenge">
          Pokémon challenge
        </NavLink>
      </h1>
    </header>
    <main role="main">
      <OnDemand fallback={<Loader />}>
        <Routes>
          <Route path="/" component={Home} exact />
          <Route path="/details" component={Details} />
          <Route path="*" component={NotFound} />
        </Routes>
      </OnDemand>
    </main>
    <footer>
      <p>All rights reserved</p>
    </footer>
  </div>
);

App.propTypes = {
  className: string.isRequired,
};

App.defaultProps = {};

export default withStyle(App);
