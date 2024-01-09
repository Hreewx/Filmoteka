import styles from "./SearchBarHeader.module.scss";

function SearchBarHeader() {
  return (
    <input
      className={styles.searchBar}
      type="text"
      placeholder="Search for a group, user or film!"
    />
  );
}

export default SearchBarHeader;
