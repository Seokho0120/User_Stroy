import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BsSuitHeart } from "react-icons/bs";

export default function ContentCard({ products }) {
  return (
    <CardContainer>
      {products &&
        products.map((item, index) => (
          <Card key={item.club.id}>
            <CardImg src={item.club.coverUrl} />
            <CardContentWrapper>
              <ContentName>{item.club.name}</ContentName>
              <ContentDescription>{item.club.description}</ContentDescription>
            </CardContentWrapper>
            <FooterLine />
            <CardFooter>
              <FooterIcon>
                <BsSuitHeart color="#FF5400" />
              </FooterIcon>
              <FooterContent>
                {`${item.club.place} 첫 모임일: ${item.club.meetings[0].startedAt} ~ ${item.club.meetings[0].endedAt}`}
              </FooterContent>
            </CardFooter>
          </Card>
        ))}
    </CardContainer>
    // Intersection
  );
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  column-gap: 8px;
  row-gap: 40px;
  padding: 16px 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 564px;
  border-radius: 7px;
  background-color: white;
`;

const CardImg = styled.img`
  width: 100%;
`;

const CardContentWrapper = styled.div`
  width: 100%;
  padding: 16px 20px;
  flex: 1;
`;

const ContentName = styled.h5`
  font-size: 22px;
  margin-bottom: 10px;
`;

const ContentDescription = styled.h6`
  font-size: 16px;
  color: #6e6e6c;
`;

const FooterLine = styled.div`
  width: 90%;
  margin: 0 20px;
  text-align: center;
  border-bottom: 1px solid #ecece9;
`;

const CardFooter = styled.div`
  width: 100%;
  padding: 16px 20px;
`;

const FooterIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff7e0;
  width: 48px;
  height: 50px;
  font-size: 24px;
  font-weight: 400;
  border-radius: 4px;
  cursor: pointer;
`;

const FooterContent = styled.div`
  width: 100%;
`;
