import * as React from 'react';

import './navbarStyles.scss';

type NavbarProps = {
  title: string;
  backbuttonEnable?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ title, backbuttonEnable }) => {
  const backbutton = backbuttonEnable ? (
    <div className="navbar__backbutton">backbutton</div>
  ) : null;

  return (
    <div className="navbar">
      {backbutton}
      <div className="navbar__title">{title}</div>
    </div>
  );
};

export default Navbar;
