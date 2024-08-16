import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search for artworks or artists..."
        value={value}
        onChange={onChange}
        className="w-full p-3 rounded border border-gray-300 "
      />
    </div>
  );
};

export default SearchInput;
