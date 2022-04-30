import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

export default function ContentCard({ products }) {
  return (
    products &&
    products.map((item, index) => (
      <Card key={item.club.id}>
        <img
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          src={item.club.coverUrl}
          alt=""
        />
      </Card>
    ))
    // Intersection
  );
}

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 7px;
  box-shadow: 1px 1px 10px #c4c4c4;
  background-color: white;
`;
