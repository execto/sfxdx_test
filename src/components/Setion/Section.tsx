import * as React from 'react';

import './sectionStyles.scss';

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="section">
    <h1 className="section__title">{title}</h1>
    <div className="section__content">{children}</div>
  </div>
);

export default Section;
