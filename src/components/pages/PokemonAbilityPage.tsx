import * as React from 'react';
import Navbar from '../Navbar/Navbar';
import Page from '../Page/Page';

type PokemonAbilityPageProps = {
  pokemonName: string;
};

const PokemonAbilityPage: React.FC<PokemonAbilityPageProps> = ({
  pokemonName,
}) => {
  const navbar = (
    <Navbar title={`Способности ${pokemonName}`} backbuttonEnable />
  );

  return (
    <Page navbar={navbar} isLoading={false} hasError={false}>
      Pokemon ability page
    </Page>
  );
};

export default PokemonAbilityPage;
