import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import './navbarStyles.scss';

type NavbarProps = {
  title: string;
  backbuttonEnable?: boolean;
};

const Navbar: React.FC<NavbarProps> = React.memo(
  ({ title, backbuttonEnable }) => {
    const history = useHistory();
    const onBackBtnClick = React.useCallback(() => history.goBack(), [history]);

    const backbutton = backbuttonEnable ? (
      <div
        role="button"
        className="navbar__backbutton"
        onClick={onBackBtnClick}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
    ) : null;

    return (
      <div className="navbar">
        {backbutton}
        <div className="navbar__title">{title}</div>
      </div>
    );
  }
);

export default Navbar;
