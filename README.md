# User_Story

상품 정보 페이지와 상세 페이지를 구현했습니다.

사용자는 상품 목록을 확인 할 수 있고, 상품의 상세 페이지에 접근이 가능합니다.

22.04.29 - 22.05.04

## Tech Stack

JavaScript(ES6) | React | React Router | emotion

## 구현 영상

**필터**를 통해 해당 상품 확인

![ezgif com-gif-maker (12)](https://user-images.githubusercontent.com/93597794/166648466-6e04056c-f69d-4dfa-9392-d9caa1cbcdf2.gif)

**검색어**를 통해 해당 상품 확인

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/93597794/166648480-3c7aeb1e-d06c-4788-bb48-eb70b07ad34a.gif)

# Study & Blocker

이번 프로젝트를 통해 새로 학습한 내용과 마주했던 문제점 및 해결 방안을 정리했습니다.

## Grid

이전까지 사용했던 Flex와 차이점에 대해 학습했습니다.

Grid는 1차원적인 Flex보다 더 디테일하게 레이아웃을 구성할 수 있었습니다.

가끔 Flex를 사용하며 부분적으로 수정이 불가능하거나, 애매하게 간격을 처리하는 경우가 생겼는데 Grid를 통해 이를 방지할 수 있게 되었습니다.

[Grid 학습 링크](https://studiomeal.com/archives/533)

### 차이점

**Flex**

- 1차원으로 수평, 수직 영역 중 하나의 방향으로 레이아웃 구성 가능

**Grid**

- 2차원으로 수평, 수직을 동시에 영역을 나누어 레이아웃 구성 가능

![01-1](https://user-images.githubusercontent.com/93597794/166641662-35859564-0ea9-4354-a8e3-dfddb59d6a05.jpeg)

## Styled-Component & Emotion

emotion에 대해 처음 접하며 학습했습니다.

이전까지 사용했던 Styled-Component와 크게 다르다는 느낌을 받지 못했는데, emotion만의 장점인 css props를 사용하지 않았기 때문일것으로 추측합니다.

추후에 emotion의 css속성을 활용하여 기존 인라인으로 사용할 수 없었던 기능을 활용해볼 예정입니다.

[Emotion 학습 1 링크](https://brunch.co.kr/@kmongdev/17) <br>
[Emotion 학습 2 링크](https://velog.io/@bepyan/styled-components-%EA%B3%BC-emotion-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%B0%A8%EC%9D%B4%EA%B0%80-%EB%AD%94%EA%B0%80)

### 차이점

**emotion css prop !== Inline style**

- inline style과 비슷해 보이지만, css props의 차별점은 이전에 사용하지 못했던 media query, pseudo selector, nested selector 등을 인라인에서 사용할 수 있습니다.

## Filtering 리팩토링

이전 프로젝트에서 filtering를 구현할때의 방식은 location.search를 통해 백엔드에서 처리를 했었습니다.

하지만 제공된 API는 엔드포인트가 없는 것으로 추측되며, 데이터를 직접 filtering 구현해야 함을 알게되었습니다.

### 리팩토링 전 UserStory

```javascript
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import FilterButton from "./Buttons/FilterButton";
import ResearchButton from "./Buttons/ResearchButton";

const BTN_NAME = ["장소", "요일", "클럽유형"];

export default function Filter({ setProduct }) {
  const [currentID, setCurrentID] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const [club, setClub] = useState([]);
  const places = useRef("");
  const openContents = (id) => {
    setCurrentID(id);
  };

  const getSelectedPlace = (info) => {
    const URLSearch = new URLSearchParams(location.search);
    Object.entries(info).map(([key, value]) => {
      if (typeof value === "boolean") {
        value && URLSearch.append("placeFilter", key);
      } else {
        value && URLSearch.append(key, value);
      }
    });
    navigate(`?` + URLSearch.toString());
  };

	useEffect(() => {
	    fetch(`https://api.json-generator.com/templates/ePNAVU1sgGtQ/data`${location.search}, {
	      method: "GET",
	      headers: {
	        "Content-Type": "application/json",
	        Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
	      },
	    })
	      .then((res) => res.json())
	      .then((data) => setProduct(data));
	  }, [location.search]);
// 78개 보여줌.
// 필터링이 안됨 -> 백엔드에서 필터 로직이 없는 것으로 추측 -> 데이터를 직접 필터링해야함.

  useEffect(() => {
    fetch("https://api.json-generator.com/templates/ePNAVU1sgGtQ/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
// 78개 뜸


  const FILTER_CONTENTS = {
    1: (
      <Place
        closeContents={closeContents}
        getSelectedPlace={getSelectedPlace}
        club={club}
      />
    ),
    2: <Days />,
    3: <Type />,
  };
```

### 리팩토링 후 UserStory

place라는 상태값을 통해 filter가 되면 filter Data를 화면에 보여주고, filter가 되지 않는다면 product Data를 보여줍니다.

then 체이닝 사용을 지양하기 위해 async, await를 사용했으며, 리팩토링 과정에서 즉시 실행함수의 개념을 알게되어 구현했습니다.

하지만 이 코드의 문제는 place의 값이 변할때마다 fetching이 되는 것인데, 이후 place뿐 아니라 type과 date까지 의존성 배열에 넣어줘야 하는데, 그렇게 된다면 서버 과부화가 예상되었습니다.

[즉지실행 함수 링크](https://devyj.tistory.com/9)

```javascript
import React, { useEffect, useState } from "react";
import { Global } from "@emotion/react";
import reset from "./styles/Reset";
import ContentCard from "./components/ContentCard";
import Headers from "./components/Header";
import Filter from "./components/Filter";
import config from "./config/config.json";

export default function UserStory() {
  const [product, setProduct] = useState([]);
  const [place, setPlace] = useState("");
  const changePlace = (selected) => setPlace(selected);

  useEffect(() => {
    (async function () {
      const res = await fetch(`${config.BASE_URL}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
        },
      });
      const data = await res.json();
      const filteredData = data.filter((item) => item.club.place === place);
      setProduct(filteredData.length === 0 ? data : filteredData);
    })();
  }, [place]);

  return (
    <>
      <Global styles={reset} />
      <Headers />
      <Filter changePlace={changePlace} place={place} />
      <ContentCard products={product} />
    </>
  );
}
```

### 마지막 리팩토링 UserStory

위 코드의 문제를 해결하기 위해 filter 파트를 새로운 useEffect에 넣어 분리시켜줬습니다.

type과 date의 값도 함께 설정할 수 있지 않을까 추측합니다.

```javascript
useEffect(() => {
  fetch(`${config.BASE_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer 22swko029o3wewjovgvs9wcqmk8p3ttrepueemyj",
    },
  })
    .then((res) => res.json())
    .then((data) => setProducts(data));
}, []);

useEffect(() => {
  const filtered = products?.filter((product) => product.club.place === place);
  setFilterProducts(filtered.length > 0 ? filtered : products);
}, [products, place]);
```

## HTTP 429에러

이번 프로젝트에서 가장 문제가 되었던 Blocker 였습니다.

너무 많은 요청으로 발생으로 발생하는 에러입니다. 주소가 mock data가 아닌 서버라서 과제를 진행하며 많은 불편함이 있었습니다.

![Untitled](https://user-images.githubusercontent.com/93597794/166646622-6166c956-f516-4516-94f2-d2587896f0a9.png)

### 해결 방법

- 여유롭게 기다렸다가 다시 접속

- 캐시 및 브라우저 기록 삭제

[429 에러 링크](https://ko.gov-civil-setubal.pt/how-fix-http-error-429)
