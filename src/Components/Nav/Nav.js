import React from "react";
import styled from "styled-components";
import mixin from "../../Styles/Mixin";
import svg from "./Svg";

export default function Nav() {
  return (
    <Container>
      <Wrapper>
        <Menu>{svg.menu}</Menu>
        <Title>처방 정보 입력</Title>
        <HandleButton>처리하기</HandleButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.color.whiteColor};
  font-family: ${({ theme }) => theme.font};
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  height: 60px;
  margin: 0 auto;
`;

const Menu = styled.div``;

const Title = styled.h3``;

const HandleButton = styled.button`
  ${mixin.border("2px")}
  border-radius: 10px;
`;
