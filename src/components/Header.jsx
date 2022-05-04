import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/Logo.png";

export default function Headers() {
  return <Title src={Logo} />;
}

const Title = styled.img`
  width: 20%;
  padding: 40px 100px;
`;
