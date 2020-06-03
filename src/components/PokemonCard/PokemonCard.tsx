import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './pokemonCardStyles.scss';

const plaseHolderSrc = 'https://via.placeholder.com/50';

type PokemonCardProps = {
  linked?: boolean;
  imgSrc?: string;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  children: pokemonName,
  linked,
  imgSrc,
}) => {
  const chevron = <FontAwesomeIcon icon={faAngleRight} />;

  const cardContent = (
    <>
      <div className="pokemon-card__avatar">
        <img src={imgSrc || plaseHolderSrc} alt="poke" />
      </div>
      <div className="pokemon-card__name">{pokemonName}</div>
      {linked && <div className="pokemon-card__chevron">{chevron}</div>}
    </>
  );

  if (linked) {
    return (
      <Link className="pokemon-card" to={`/pokemon/${pokemonName}`}>
        {cardContent}
      </Link>
    );
  }

  return <div className="pokemon-card">{cardContent}</div>;
};

export default PokemonCard;
