import { useState } from "react";


import Header from "./Header/Header/Header";
import MainTitle from './Vacancies/MainTitle/MainTitle'
import Vacancies from "./Vacancies/Vacancies/Vacancies";
import Filter from "./Filter/Filter/Filter";
import Paginations from './Pagination/Pagination'
import Footer from "./Footer/Footer";
import { MenuSideBar, Button } from "./Filter/Filter/Filter.styled";
import styles from './App.module.css'
import close from "../utils/svg/close.svg";

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const clickHandler = () => {
    setMenuOpen(!isMenuOpen);
  };

  const screenIsMobile = window.screen.width <= 768;

  console.log("is Open", isMenuOpen);
  return (
    <div>
      <Header />
      <MainTitle clickHandler={clickHandler}/>
      <div className={styles.container}>
      <Vacancies />

      {screenIsMobile ? (
        <MenuSideBar open={isMenuOpen}>
          <Button onClick={clickHandler}>
            <img className="header__icon" src={close} alt="network" />
          </Button>
          <Filter />
        </MenuSideBar>
      ) : (
        <Filter />
      )}
</div>

      <Footer />
    </div>
  );
}

export default App;
