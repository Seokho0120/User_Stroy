import React from "react";
import styled from "@emotion/styled";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ updateSearchProduct }) {
  return (
    <SearchForm>
      <FiSearch />
      <SearchInput
        placeholder="검색어를 입력하세요"
        onChange={(e) => updateSearchProduct(e.target.value)}
      />
    </SearchForm>
  );
}

const SearchForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 284px;
  height: 40px;
  background-color: #f7f7f5;
  border-radius: 40px;
  padding: 10px 0 10px 12px;
`;

const SearchInput = styled.input`
  font-weight: 500;
  margin-left: 8px;
  background-color: transparent;
  &:focus {
    outline: none;
    caret-color: #ff7900;
  }
`;
