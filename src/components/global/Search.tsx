import { FiSearch } from "react-icons/fi";
import { css } from "../../../styled-system/css";
import { searchContainer, searchIcon, searchInput } from "../../style/component/global/search";

type SearchProps = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({search, setSearch}: SearchProps) => {
  return (
    <section className={css(searchContainer)}>
        <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder='Search...' className={css(searchInput)}/>
        <i className={css(searchIcon)}><FiSearch /></i>
    </section>
  )
}

export default Search