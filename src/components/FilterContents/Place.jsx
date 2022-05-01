import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Place() {
  return (
    <Wrapper>
      <Contents>체크박스</Contents>
      <Contents>체크박스</Contents>
      <Contents>체크박스</Contents>
      <Contents>체크박스</Contents>
      <Contents>체크박스</Contents>
      <ButtonWrapper>
        <Buttons>취소</Buttons>
        <Buttons>적용</Buttons>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  /* background-color: black; */
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 4px 10px;
  padding: 14px;
  top: 120%;
`;

const Contents = styled.div`
  /* background-color: blue; */
  color: black;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: flex-end;
`;

const Buttons = styled.button`
  background-color: red;
  color: white;
  padding: 4px 12px;
  text-align: center;
  font-weight: bold;
  margin-left: 12px;
`;
