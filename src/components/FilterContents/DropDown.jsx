import React from "react";
import styled from "@emotion/styled";

export default function DropDown({
  checkbox,
  value,
  name,
  onChange,
  type,
  closeContents,
  index,
}) {
  return (
    <Wrapper>
      <PlaceList key={index}>
        <Label name={name}>
          <CheckBox
            type={checkbox}
            value={value}
            name={name}
            onChange={onChange}
          />
          <PlaceName></PlaceName>
        </Label>
      </PlaceList>
      <ButtonWrapper>
        <CloseButton onClick={() => closeContents()}>취소</CloseButton>
        <Buttons>적용</Buttons>
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
