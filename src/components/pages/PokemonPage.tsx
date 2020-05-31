import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';

type PokemonPageProps = {
  pokemonName: string;
};

const PokemonPage: React.FC<PokemonPageProps> = ({ pokemonName }) => {
  const navbar = <Navbar title={pokemonName} backbuttonEnable />;

  return <Page navbar={navbar}>Pokemon page</Page>;
};

export default PokemonPage;
