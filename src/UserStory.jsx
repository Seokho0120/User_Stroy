import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import ContentCard from "./components/ContentCard";
import Headers from "./components/Header";
import Filter from "./components/Filter";

export default function UserStory() {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://api.json-generator.com/templates/ePNAVU1sgGtQ/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  // console.log(product);

  return (
    <>
      <Global styles={reset} />
      <Headers />
      <Filter />
      <ContentCard products={product} />
    </>
  );
}
