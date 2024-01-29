import React from 'react';
import { Title } from './Form.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const handleSearch = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <Title>Search</Title>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={handleSearch}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;
Filter.propTypes = {
  value: PropTypes.string.isRequired, 
  onChange: PropTypes.func.isRequired, 
};