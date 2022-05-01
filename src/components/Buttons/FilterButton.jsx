import React from "react";
import styled from "@emotion/styled";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function FilterButton({ text, onClick }) {
  return (
    <BtnForm onClick={onClick}>
      {text}
      <MdOutlineKeyboardArrowDown />
    </BtnForm>
  );
}

const BtnForm = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 6px 10px 6px 10px;
  margin-right: 6px;
  border: 1px solid #ff8900;
  border-radius: 3px;
  color: #ff7900;
  background-color: #fff;
  font-weight: bold;
`;
