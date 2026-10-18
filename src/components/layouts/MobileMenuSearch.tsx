import { CiSearch } from "react-icons/ci";
import { flex } from "../../style/recipe/flex";
import { css } from "../../../styled-system/css";
import {
  container,
  input,
  searchIcon,
} from "../../style/layout/mobile-menu/mobileMenuSearch";
import useSearch from "../../hooks/useSearch";
import SearchBox from "../global/SearchBox";

const MobileMenuSearch = () => {
  const { search, searchdata, setSearch, handleEnterSearch, handleSearch } =
    useSearch();

  return (
    <div
      className={css(
        flex.raw({ columnGap: "sm", type: "spaceBetween" }),
        container,
      )}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => handleEnterSearch(e)}
        value={search}
        placeholder="Search for items"
        className={input}
      />
      <span className={searchIcon}>
        <CiSearch />
      </span>

      {search !== "" && searchdata.length >= 1 && (
        <SearchBox
          search={search}
          searchdata={searchdata}
          handleSearch={handleSearch}
        />
      )}
    </div>
  );
};

export default MobileMenuSearch;
