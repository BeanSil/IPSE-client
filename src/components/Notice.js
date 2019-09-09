import React, { createRef, useState, useEffect } from "react";
import styled from "styled-components";
import oc from "open-color";

import { ReactComponent as Img1 } from "asset/notice_image_2.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  color: ${oc.gray[9]};

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;

const ContentDiv = styled.div`
  margin: auto 0;
  box-sizing: border-box;
  display: block;
  min-width: 550px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Text1 = styled.span`
  font-size: 3.5rem;
  margin: 0;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
  opacity: 1;
  animation-name: FadeIn;
  animation-timing-function: ease-out;
  animation-duration: 1s;`
      : ``}

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SubHeading = styled.h2`
  opacity: 0;
  ${props =>
    props.on
      ? `
      opacity: 1;
      animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;`
      : ``};
`;

const Description = styled.span`
  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 0.9s;
`;

const EntryButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${oc.gray[9]};
  font-size: 2rem;
  font-weight: 600;
  width: 20rem;
  height: 3.5rem;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  color: ${oc.gray[9]};
  letter-spacing: 2px;

  &:hover {
    background-color: ${oc.gray[9]};
    color: ${oc.gray[0]};
  }

  animation-name: FadeIn;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;
`;

const ImageDiv = styled.div`
  height: 100%;
  display: flex;
  box-sizing: border-box;
  opacity: 0;

  ${props =>
    props.scroll
      ? `
    opacity: 1;
    animation-name: MoveUpImage;
    animation-timing-function: ease-in;
    animation-duration: 0.5s;`
      : ``}

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 30px;
    }
    100% {
      opacity: 1;
      padding-top: 0px;
    }
  }
`;

const SvgImage = styled(Img1)`
  width: 50vw;
  height: auto;
  margin: auto 0;
  padding: 20px;

  .avatar {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 0.7s;

    @keyframes FadeInItems {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
      }
    }
  }
  .desc {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1s;
  }

  .person {
    animation-name: FadeInItems;
    animation-timing-function: ease-in;
    animation-duration: 1.2s;
  }

  @media (max-width: 1200px) {
    width: 100vw;
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <Wrapper ref={Reference}>
      <Spacer />
      <ImageDiv scroll={scroll}>
        <SvgImage />
      </ImageDiv>
      <Spacer />
      <ContentDiv>
        <Text1 scroll={scroll}>수험자 안내사항</Text1>
        <SubHeading scroll={scroll}>
          광주소프트웨어마이스터고등학교 원서접수 시스템
        </SubHeading>
        <EntryButton>지금 접수하기</EntryButton>
      </ContentDiv>
      <Spacer />
    </Wrapper>
  );
};

export default Info;