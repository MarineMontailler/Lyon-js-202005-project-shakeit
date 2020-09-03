import React, { useContext } from "react";
import RandomCocktails from "./RandomCocktails.js";
import { FavContext } from "../context/FavContext";
import Desktop from "../components/MainPage/Desktop";

import "font-awesome/css/font-awesome.min.css";

const DisplayCocktails = () => {
  // Hooks déclaration
  const [favCocktails, setFavCocktails] = useContext(FavContext);

  return (
    <>
      <h2 style={{ fontSize: "120%", color: "#00b9cd", marginBottom: "20px" }}>
        Some cocktails ( just for you )
      </h2>
      <Desktop>
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
        <RandomCocktails
          favCocktails={favCocktails}
          setFavCocktails={setFavCocktails}
        />
      </Desktop>
    </>
  );
};

export default DisplayCocktails;
