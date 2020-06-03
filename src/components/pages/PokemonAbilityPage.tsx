import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';
import Text from '../Text/Text';
import Section from '../Section/Section';
import { PokemonAbility } from '../../models/pokemon';
import { MainState } from '../../models/store';
import { getPokemonAbility } from '../../actions/pokemonsActions';

import './pokemonAbilityStyles.scss';
import { capitalize } from '../../helpers';

const PokemonAbilityPage: React.FC = () => {
  const pokemonAbility: PokemonAbility = useSelector(
    (state: MainState) => state.pokemonAbility
  );
  const { isLoading, hasError, name, description, pokemons } = pokemonAbility;
  const dispatch = useDispatch();
  const params = useParams();
  const abilityName = params.name;

  React.useEffect(() => {
    dispatch(getPokemonAbility(abilityName));
  }, []);

  const navbar = <Navbar title="Способность" backbuttonEnable />;

  return (
    <Page
      styleClass="ability-page"
      navbar={navbar}
      isLoading={isLoading}
      hasError={hasError}
    >
      <Section title="Способность">
        <Text>{capitalize(name)}</Text>
      </Section>
      <Section title="Описание">
        <Text>{description}</Text>
      </Section>
      <Section title="Покемоны">
        <div className="ability-page__pokemons">
          {pokemons?.map((pokemon) => (
            <Text key={pokemon} linked link={`/pokemon/${pokemon}`}>
              {pokemon}
            </Text>
          ))}
        </div>
      </Section>
    </Page>
  );
};

export default PokemonAbilityPage;
