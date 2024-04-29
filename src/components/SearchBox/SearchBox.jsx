import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
// import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const userId = useId();
  const selectNameFilter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <label htmlFor={userId}>Find contacts by name</label>
      <input
        className={css.input}
        id={userId}
        type="text"
        value={selectNameFilter}
        onChange={(evt) => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};
export default SearchBox;
