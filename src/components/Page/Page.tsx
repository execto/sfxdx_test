import * as React from 'react';

import './pageStyles.scss';

type PageProps = {
  navbar?: JSX.Element;
};

const Page: React.FC<PageProps> = ({ navbar, children }) => {
  const navbarComponent = navbar || null;

  return (
    <div className="page">
      <div className="page__navbar">{navbarComponent}</div>
      <div className="page__content">{children}</div>
    </div>
  );
};

export default Page;
