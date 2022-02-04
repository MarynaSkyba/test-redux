import MainNav from "../MainNav/MainNav";
import SearchForm from "../SearchForm/SearchForm";
import styles from "../MainNav/MainNav.module.css";

const Header = () => {
  return (
    <header className={styles.nav_bcg}>
      <MainNav />
      <SearchForm />
    </header>
  );
};

export default Header;
