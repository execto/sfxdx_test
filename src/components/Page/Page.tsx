import * as React from 'react';

import './pageStyles.scss';
import Preloader from '../Preloader/Preloader';

type PageProps = {
  isLoading: boolean;
  hasError: boolean;
  navbar?: JSX.Element;
  styleClass?: string;
};

const Page: React.FC<PageProps> = ({
  navbar,
  children,
  isLoading,
  hasError,
  styleClass,
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

  const pageClassName = `page ${styleClass || ''}`;
  return (
    <div className={pageClassName}>
      <div className="page__navbar">{navbarComponent}</div>
      <div className="page__content">{content}</div>
    </div>
  );
};

export default Page;
