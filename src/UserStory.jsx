import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import ContentCard from "./components/ContentCard";
import Headers from "./components/Header";
import Filter from "./components/Filter";
import config from "./config/config.json";

export default function UserStory() {
  const [product, setProduct] = useState([]);
  const [place, setPlace] = useState("");

  const changePlace = (selected) => setPlace(selected);
  // console.log(place);

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
      const filteredData = data.filter((item) => item.club.place === place);
      setProduct(filteredData.length === 0 ? data : filteredData);
    })();
  }, [place]);

  return (
    <>
      <Global styles={reset} />
      <Headers />
      <Filter changePlace={changePlace} place={place} />
      <ContentCard products={product} />
    </>
  );
}
