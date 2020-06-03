import * as React from 'react';

import './sectionStyles.scss';

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="section">
    <div className="section__title">
      <span className="title">{title}</span>
    </div>
    <div className="section__content">{children}</div>
  </div>
);

export default Section;
