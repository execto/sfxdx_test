import * as React from 'react';

import './pokemonCardStyles.scss';

const PokemonCard: React.FC = ({ children }) => {
  const chevron = '-->';
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__avatar">
        <img src="" alt="poke" />
      </div>
      <div className="pokemon-card__name">{children}</div>
      <div className="pokemon-card__chevron">{chevron}</div>
    </div>
  );
};

export default PokemonCard;
