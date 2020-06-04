import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';
import { getPokemonList, searchPokemons } from '../../actions/pokemonsActions';
import { MainState } from '../../models/store';
import List from '../List/List';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Pokemons } from '../../models/pokemon';
import SearchToolbar from '../Toolbar/Toolbar';

const PokemonsListPage: React.FC = () => {
  const pokemonsState: Pokemons = useSelector(
    (state: MainState) => state.pokemons
  );
  const { pokemons, isLoading, hasError } = pokemonsState;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPokemonList());
  }, []);

  const handleSearch = React.useCallback((value: string) => {
    if (!value.length) {
      dispatch(getPokemonList());
      return;
    }
    dispatch(searchPokemons(value));
  }, []);

  const navbar = <Navbar title="Покемоны" />;

  const pokemonsList = pokemons?.map((pokemon) => (
    <PokemonCard key={pokemon.name} linked>
      {pokemon.name}
    </PokemonCard>
  ));

  return (
    <Page
      navbar={navbar}
      isLoading={isLoading}
      hasError={hasError}
      searchToolbar
    >
      <List>{pokemonsList}</List>
      <SearchToolbar onSearch={handleSearch} />
    </Page>
  );
};

export default PokemonsListPage;
