import { string } from 'prop-types';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Avatar, Stat } from 'components/widgets';

import { usePokemon } from './hooks';
import withStyle from './style';

export const renderStat = stat => <Stat key={stat.stat.name} {...stat} />;

export const Pokemon = ({ className, ...props }) => {
  const {
    sprites: { front_default: avatar },
    id,
    name,
    height,
    weight,
    stats,
    url,
  } = usePokemon(props);

  return (
    <article className={className}>
      <Avatar src={avatar} caption={name} />
      <dl>
        <dt>ID</dt>
        <dd>
          <em>#</em>
          <strong>{id}</strong>
        </dd>
      </dl>
      <dl>
        <dt>Name</dt>
        <dd>
          <Link to={url}>{name}</Link>
        </dd>
      </dl>
      <dl>
        <dt>Height</dt>
        <dd>{height}</dd>
      </dl>
      <dl>
        <dt>Weight</dt>
        <dd>{weight}</dd>
      </dl>
      <dl>
        <dt>Stats</dt>
        <dd>{stats.map(renderStat)}</dd>
      </dl>
    </article>
  );
};

Pokemon.propTypes = {
  className: string.isRequired,
};

Pokemon.defaultProps = {};

export default withStyle(Pokemon);
