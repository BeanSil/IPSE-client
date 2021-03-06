import React, { createRef, useState, useEffect } from "react";

import {
  Wrapper,
  Spacer,
  ImageDiv,
  SvgImage3,
  ContentDiv,
  Heading,
  SubHeading,
  Button
} from "styles/HomeStyle";

const Info = () => {
  const [scroll, setScroll] = useState(false);
  const [Reference, setReference] = useState(() => createRef());

  const posTop = () => {
    if (typeof window.pageYOffset !== "undefined") {
      return window.pageYOffset;
    } else if (document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    } else if (document.body.scrollTop) {
      return document.body.scrollTop;
    }
    return 0;
  };

  const handleScroll = () => {
    const element = Reference.current;
    const top = posTop();
    const elementPositionY = element.getBoundingClientRect().top + top;
    const scrollPositionY = window.scrollY
      ? window.scrollY
      : window.pageYOffset;
    const windowHeight = window.innerHeight;
    if (scrollPositionY + windowHeight >= elementPositionY + 700) {
      setScroll(true);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <Wrapper ref={Reference}>
        <Spacer />
        <ContentDiv>
          <Heading scroll={scroll ? 1 : 0}>
            입학 전 궁금한 사항들을
            <br />
            질문하세요
          </Heading>
          <SubHeading scroll={scroll ? 1 : 0}>
            학교 관련자분께 직접 질문할 수 있습니다.
          </SubHeading>
          <Button scroll={scroll ? 1 : 0}>Q&A 게시판 이동</Button>
        </ContentDiv>
        <Spacer />
        <ImageDiv scroll={scroll ? 1 : 0}>
          <SvgImage3 scroll={scroll ? 1 : 0} />
        </ImageDiv>
        <Spacer />
      </Wrapper>
    </>
  );
};

export default Info;
