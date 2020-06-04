import * as React from 'react';

import './inputStyles.scss';

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  placeholder?: string;
};

const Input: React.FC<InputProps> = (props) => {
  const { onChange, type, placeholder } = props;
  return (
    <div className="input-wrap">
      <input type={type} placeholder={placeholder || ''} onChange={onChange} />
    </div>
  );
};

export default Input;
