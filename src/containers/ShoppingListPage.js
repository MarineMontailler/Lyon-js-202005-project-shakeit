import React from "react";
import Footer from "../components/MainPage/Footer";
import Header from "../components/MainPage/Header";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import LogOut from "./LogOut";
import ShoppingListContent from "./ShoppingListContent";
import CocktailLogo from "./Logo";
import Title from "./../components/MainPage/Title";

const ShoppingListPage = ({ listIngredients, setListIngredients }) => {
  return (
    <div>
      <Header>
        <Link to="/main">
          <CocktailLogo />
        </Link>
        <Title>ShakeIt</Title>
        <LogOut />
      </Header>
      <ShoppingListContent
        list={listIngredients}
        setListIngredients={setListIngredients}
      />

      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
};

export default ShoppingListPage;
