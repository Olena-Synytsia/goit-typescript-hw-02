// import toast, { Toaster } from 'react-hot-toast';

import s from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={s.container}>
      <header>
        <form>
          {/* <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          /> */}
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
