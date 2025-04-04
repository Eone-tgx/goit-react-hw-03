import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
