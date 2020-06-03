import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';
import { PokemonInfo } from '../../models/pokemon';
import { MainState } from '../../models/store';
import { getPokemon } from '../../actions/pokemonsActions';
import PokemonCard from '../PokemonCard/PokemonCard';
import Text from '../Text/Text';
import Section from '../Section/Section';

import './pokemonPageStyles.scss';

const PokemonPage: React.FC = () => {
  const pokemon: PokemonInfo = useSelector((state: MainState) => state.pokemon);
  const {
    isLoading,
    hasError,
    types,
    height,
    weight,
    experience,
    abilities,
    imgUrl,
  } = pokemon;
  const dispatch = useDispatch();
  const params = useParams();
  const pokemonName = params.name;

  React.useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const navbar = <Navbar title={pokemonName} backbuttonEnable />;

  return (
    <Page
      styleClass="pokemon-page"
      navbar={navbar}
      isLoading={isLoading}
      hasError={hasError}
    >
      <PokemonCard imgSrc={imgUrl}>{pokemonName}</PokemonCard>
      <Section title="Рост">
        <Text>{height}</Text>
      </Section>
      <Section title="Вес">
        <Text>{weight}</Text>
      </Section>
      <Section title="Опыт">
        <Text>{experience}</Text>
      </Section>
      <Section title="Типы">
        <div className="pokemon-page__types">
          {types?.map((type) => (
            <Text key={type}>{type}</Text>
          ))}
        </div>
      </Section>
      <Section title="Способности">
        <div className="pokemon-page__abilities">
          {abilities?.map((ability) => (
            <Text linked link={`/ability/${ability}`} key={ability}>
              {ability}
            </Text>
          ))}
        </div>
      </Section>
    </Page>
  );
};

export default PokemonPage;
