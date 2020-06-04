import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useThrottle from '../../hooks/useThrottle';
import Input from '../Input/Input';

import './toolbarStyles.scss';

type SearchToolbarProps = {
  onSearch: (value: string) => void;
};

const SearchToolbar: React.FC<SearchToolbarProps> = React.memo(
  ({ onSearch }) => {
    const [value, setValue] = React.useState<string>('');
    const throttle = useThrottle(onSearch);

    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        throttle(e.target.value);
        setValue(e.target.value);
      },
      []
    );

    return (
      <div className="search-toolbar">
        <div className="search-toolbar__input">
          <div className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <Input
            value={value}
            type="search"
            placeholder="Поиск..."
            onChange={handleChange}
          />
        </div>
      </div>
    );
  }
);

export default SearchToolbar;
