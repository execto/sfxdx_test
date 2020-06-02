import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './pokemonCardStyles.scss';

const PokemonCard: React.FC = ({ children }) => {
  const chevron = <FontAwesomeIcon icon={faAngleRight} />;

  return (
    <Link className="pokemon-card" to={`/pokemon/${children}`}>
      <div className="pokemon-card__avatar">
        <img src="https://via.placeholder.com/50" alt="poke" />
      </div>
      <div className="pokemon-card__name">{children}</div>
      <div className="pokemon-card__chevron">{chevron}</div>
    </Link>
  );
};

export default PokemonCard;
