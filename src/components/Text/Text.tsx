import * as React from 'react';
import { Link } from 'react-router-dom';

import './textStyles.scss';

type TextProps = {
  linked?: boolean;
  link?: string;
};

const commonStyleClass = 'text';

const Text: React.FC<TextProps> = ({ linked, link, children }) => {
  if (linked) {
    return (
      <Link to={link} className={`${commonStyleClass} linked-text`}>
        {children}
      </Link>
    );
  }

  return <span className={commonStyleClass}>{children}</span>;
};

export default Text;
