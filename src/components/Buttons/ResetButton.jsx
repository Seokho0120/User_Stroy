import React from "react";
import styled from "@emotion/styled";

export default function ResetButton() {
  return <ResetBtnForm>초기화</ResetBtnForm>;
}

const ResetBtnForm = styled.button`
  margin-right: 10px;
  text-decoration: underline;
  font-weight: bold;
`;
