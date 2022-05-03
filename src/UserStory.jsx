import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import ContentCard from "./components/ContentCard";
import Headers from "./components/Header";
import Filter from "./components/Filter";
import config from "./config/config.json";

export default function UserStory() {
  const [products, setProducts] = useState([]);
  const [place, setPlace] = useState("");
  const [searchProduct, setSearchProduct] = useState("");

  const changePlace = (selected) => setPlace(selected);
  // State 끌어올리기
  const updateSearchProduct = (e) => setSearchProduct(e);
  // State 끌어올리기

  useEffect(() => {
    (async function () {
      const res = await fetch(`${config.BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
        },
      });
      const data = await res.json();
      const filteredData = data.filter(
        (product) => product.club.place === place
      );
      setProducts(filteredData.length === 0 ? data : filteredData);
    })();
  }, [place]);

  const sortedProducts = products.filter((product) => {
    return product.club.name.includes(searchProduct);
  });

  return (
    <>
      <Global styles={reset} />
      <Headers />
      <Filter
        changePlace={changePlace}
        place={place}
        updateSearchProduct={updateSearchProduct}
      />
      <ContentCard products={sortedProducts} />
    </>
  );
}
