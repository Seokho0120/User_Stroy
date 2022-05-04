import React, { useState } from "react";
import styled from "@emotion/styled";

const PLACE_TYPE = [
  { id: 1, type: "강남", name: "강남" },
  { id: 2, type: "안국", name: "안국" },
  { id: 3, type: "온라인", name: "온라인" },
  {
    id: 4,
    type: "롯데백화점 잠실점 문화센터",
    name: "롯데백화점 잠실점 문화센터",
  },
];

export default function Place({ changePlace, closeContents }) {
  const [selected, setSelected] = useState("");

  const handleChange = (e) => {
    const { name } = e.target;
    setSelected(name);
  };

  return (
    <Wrapper>
      {PLACE_TYPE.map((item, index) => {
        return (
          <PlaceList key={index} onChange={handleChange}>
            <Label name={item.name}>
              <CheckBox
                type="checkbox"
                value="space"
                name={item.name}
                checked={selected[item.name]}
                readOnly
              />
              <PlaceName>{item.type}</PlaceName>
            </Label>
          </PlaceList>
        );
      })}
      <ButtonWrapper>
        <CloseButton onClick={closeContents}>취소</CloseButton>
        <Buttons
          onClick={() => {
            changePlace(selected);
            closeContents();
          }}
        >
          적용
        </Buttons>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 16%) 0px 5px 10px;
  padding: 14px;
  top: 120%;
`;

const PlaceList = styled.li`
  padding: 4px;
`;

const Label = styled.label``;

const CheckBox = styled.input`
  margin-right: 10px;
  &:checked {
    accent-color: #ff7900;
  }
`;

const PlaceName = styled.span`
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background-color: rgb(247, 247, 245);
  padding: 4px 12px;
  text-align: center;
  font-weight: bold;
  margin-left: 12px;
  border-radius: 3px;
`;

const Buttons = styled.button`
  background-color: #ff7900;
  color: #fff;
  padding: 4px 12px;
  text-align: center;
  font-weight: bold;
  margin-left: 12px;
  border-radius: 3px;
`;
