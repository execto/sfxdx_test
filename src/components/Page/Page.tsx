import * as React from 'react';

import './pageStyles.scss';
import Preloader from '../Preloader/Preloader';

type PageProps = {
  navbar?: JSX.Element;
  isLoading: boolean;
  hasError: boolean;
};

const Page: React.FC<PageProps> = ({
  navbar,
  children,
  isLoading,
  hasError,
}) => {
  const navbarComponent = navbar || null;

  let content;
  if (isLoading) {
    content = <Preloader />;
  } else if (hasError) {
    content = <div>ERROR</div>;
  } else {
    content = children;
  }
  return (
    <div className="page">
      <div className="page__navbar">{navbarComponent}</div>
      <div className="page__content">{content}</div>
    </div>
  );
};

export default Page;
