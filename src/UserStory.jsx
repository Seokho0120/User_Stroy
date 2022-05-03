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
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");

  const changePlace = (selected) => setPlace(selected);
  // State 끌어올리기
  const updateSearchProducts = (e) => setSearchProduct(e);
  // State 끌어올리기

  useEffect(() => {
    fetch(`${config.BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
      },
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const filtered = products?.filter(
      (product) => product.club.place === place
    );
    setFilterProducts(filtered.length > 0 ? filtered : products);
  }, [products, place]);

  useEffect(() => {
    searchProduct &&
      setFilterProducts((current) =>
        current.filter((product) => {
          return product.club.name.includes(searchProduct);
        })
      );
  }, [searchProduct]);

  return (
    <>
      <Global styles={reset} />
      <Headers />
      <Filter
        changePlace={changePlace}
        place={place}
        updateSearchProducts={updateSearchProducts}
      />
      <ContentCard filterProducts={filterProducts} products={products} />
    </>
  );
}
