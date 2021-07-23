import React, { useState } from 'react';
import { Input } from 'antd';
import InputSearch from './style';

const SearchInput = () => {
  const { Search } = Input;
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <InputSearch>
      <Search
        placeholder="search product"
        value={searchTerm}
        onChange={handleChange}
      />
    </InputSearch>
  );
};

export default SearchInput;
