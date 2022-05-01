import React from "react";
import styled from "@emotion/styled";
import FilterButton from "./Buttons/FilterButton";
import ResearchButton from "./Buttons/ResearchButton";
import ResetButton from "./Buttons/ResetButton";

export default function Filter() {
  const btnName = ["장소", "요일", "클럽유형"];

  return (
    <FilterWrapper>
      <ResetButton />
      {btnName.map((btnItem, index) => {
        return <FilterButton key={btnItem + index} text={btnItem} />;
      })}
      <ResearchButton />
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px 32px;
`;
