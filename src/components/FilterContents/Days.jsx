import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Days() {
  return (
    <Wrapper>
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
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 4px 10px;
  padding: 16px;
  top: 50%;
`;

const Contents = styled.div`
  background-color: blue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: flex-end;
`;

const Buttons = styled.button`
  background-color: red;
  padding: 4px 12px;
  text-align: center;
  font-weight: bold;
`;
