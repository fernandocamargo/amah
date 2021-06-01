import { string } from 'prop-types';
import React, { useCallback } from 'react';

import { Loader } from 'components/widgets';

import { useHome } from './hooks';
import Item from './item';
import withStyle from './style';

export const renderItem = item => <Item key={item.name} {...item} />;

export const Home = ({ className }) => {
  const { searching, search } = useHome();
  const Display = useCallback(() => {
    switch (true) {
      case !!searching.loading:
        return <Loader />;
      case !!searching.data:
        return searching.data.map(renderItem);
      default:
        return false;
    }
  }, [searching]);

  return (
    <section className={className}>
      <form onSubmit={search}>
        <fieldset>
          <legend>Search</legend>
          <div>
            <label htmlFor="keywords">Keywords</label>
            <input
              type="text"
              name="keywords"
              id="keywords"
              placeholder="Type the pokémon name"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </fieldset>
      </form>
      <Display />
    </section>
  );
};

Home.propTypes = {
  className: string.isRequired,
};

Home.defaultProps = {};

export default withStyle(Home);
