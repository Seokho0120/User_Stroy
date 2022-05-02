import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import FilterButton from "./Buttons/FilterButton";
import ResearchButton from "./Buttons/ResearchButton";
import ResetButton from "./Buttons/ResetButton";
import Place from "./FilterContents/Place";
import Days from "./FilterContents/Days";
import Type from "./FilterContents/Type";

const BTN_NAME = ["장소", "요일", "클럽유형"];

export default function Filter() {
  const places = useRef("");

  const [currentID, setCurrentID] = useState();

  const openContents = (id) => {
    setCurrentID(id);
  };

  const closeContents = () => {
    setCurrentID(false);
    // console.log("close");
  };

  // const getSelectedPlace = (item) => {
  //   setCurrentID(false);
  //   Object.entries(item).map(([key, value]) => {
  //     places.current = `${places.current}`;
  //   });
  // };

  const FILTER_CONTENTS = {
    1: <Place closeContents={closeContents} />,
    2: <Days />,
    3: <Type />,
  };
  // 추후 리팩토링 방향 -> 1~3번을 map으로 돌린 후 전부 false, 클릭 시 true가 되면 화면에 보이게 만들기

  return (
    <FilterWrapper>
      <ResetButton />
      <FilterBtnWrapper>
        {BTN_NAME.map((btnItem, index) => {
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
