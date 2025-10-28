import type { SearchBarProps } from '../types';

function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      className="search-input"
      type="text"
      value={value}
      placeholder="Rechercher un zizi…"
      onChange={onChange}
    />
  );
}

export default SearchBar;
