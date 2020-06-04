import * as React from 'react';

import './pageStyles.scss';
import Preloader from '../Preloader/Preloader';
import { getClasses } from '../../helpers';

type PageProps = {
  isLoading: boolean;
  hasError: boolean;
  toolbar?: boolean;
  navbar?: JSX.Element;
  searchToolbar?: boolean;
  styleClass?: string;
};

const Page: React.FC<PageProps> = ({
  navbar,
  searchToolbar,
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

  const pageClassName = {
    page: true,
    'page-with-toolbar': searchToolbar || false,
    externalClasses: [styleClass],
  };

  return (
    <div className={getClasses(pageClassName)}>
      <div className="page__navbar">{navbarComponent}</div>
      <div className="page__content">{content}</div>
    </div>
  );
};

export default Page;
