import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';
import { PokemonInfo } from '../../models/pokemon';
import { MainState } from '../../models/store';
import { getPokemon } from '../../actions/pokemonsActions';

const PokemonPage: React.FC = () => {
  const pokemon: PokemonInfo = useSelector((state: MainState) => state.pokemon);
  const dispatch = useDispatch();
  const params = useParams();
  const pokemonName = params.name;

  React.useEffect(() => {
    dispatch(getPokemon(pokemonName));
  }, []);

  const navbar = <Navbar title={pokemonName} backbuttonEnable />;

  return (
    <Page navbar={navbar} isLoading={false} hasError={false}>
      Pokemon page
    </Page>
  );
};

export default PokemonPage;
