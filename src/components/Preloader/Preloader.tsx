import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import './preloaderStyles.scss';

const Preloader: React.FC = () => (
  <div className="preloader">
    <div className="preloader__icon">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  </div>
);

export default Preloader;
