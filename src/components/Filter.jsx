import React, { useState } from "react";
import styled from "@emotion/styled";
import FilterButton from "./Buttons/FilterButton";
import ResearchButton from "./Buttons/ResearchButton";
import ResetButton from "./Buttons/ResetButton";
import Place from "./FilterContents/Place";
import Days from "./FilterContents/Days";
import Type from "./FilterContents/Type";

export default function Filter() {
  const btnName = ["장소", "요일", "클럽유형"];

  const FILTER_CONTENTS = {
    1: <Place />,
    2: <Days />,
    3: <Type />,
  };

  const [currentID, setCurrentID] = useState();

  const openContents = (id) => {
    setCurrentID(id);
  };

  const closeContents = () => {
    setCurrentID(false);
  };

  // 버튼 클릭 -> 드롭다운
  // 평소 안보이다가 버튼을 클릭하면 새로운 드롭다운이 보여진다.

  return (
    <FilterWrapper>
      <ResetButton />
      <FilterBtnWrapper>
        {btnName.map((btnItem, index) => {
          return (
            <FilterButton
              key={btnItem + index}
              text={btnItem}
              onClick={() => openContents(index + 1)}
            />
          );
        })}
        {FILTER_CONTENTS[currentID]}
      </FilterBtnWrapper>
      <ResearchButton />
    </FilterWrapper>
  );
}

const FilterWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px 32px;
`;

const FilterBtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px;
`;
