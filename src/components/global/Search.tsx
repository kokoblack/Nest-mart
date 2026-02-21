import { FiSearch } from "react-icons/fi";
import { css } from "../../../styled-system/css";
import { searchContainer, searchIcon, searchInput } from "../../style/component/global/search";

const Search = () => {
  return (
    <section className={css(searchContainer)}>
        <input type="text" placeholder='Search...' className={css(searchInput)}/>
        <i className={css(searchIcon)}><FiSearch /></i>
    </section>
  )
}

export default Search