import { SearchSugContainer } from "../../style/layout/nav/topNav";
import { css } from "../../../styled-system/css";
import { CiSearch } from "react-icons/ci";
import { Product } from "../../hooks/useSearch";

type SearchBoxProps = {
  search: string;
  searchdata: Product
  handleSearch: (value: string) => void;
};

const SearchBox = ({ search, searchdata, handleSearch }: SearchBoxProps) => {

  return (
    <section className={css(SearchSugContainer)}>
      {search !== "" &&
        searchdata.map((data, i) => (
          <section onClick={() => handleSearch(data.name)} key={i}>
            <CiSearch
              className={css({
                fontSize: ".85rem",
              })}
            />
            <p>{data.name}</p>
          </section>
        ))}
    </section>
  );
};

export default SearchBox;
