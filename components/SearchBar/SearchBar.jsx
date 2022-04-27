import styles from "./searchbar.module.css";

const SearchBar = ({setSearchText}) => {
    return (
        <div className={styles.searchBar}>
            <input className={styles.search} onChange={e => setSearchText(e.target.value)} type="search" placeholder={"Type to search..."}/>
        </div>
    );
};

export default SearchBar;