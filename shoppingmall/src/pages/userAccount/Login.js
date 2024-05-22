import React from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

const Login = () => {
  return (
    <>
      <Wrapper>
        <Title>
          <Header>super24</Header>
        </Title>
        <InputWrapper>
          <Input placeholder="아이디(이메일)" required />
          <Input placeholder="비밀번호" type="password" required />
          <SubmitButton>로그인</SubmitButton>
        </InputWrapper>
        <SignupButton>회원가입</SignupButton>
      </Wrapper>
    </>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  padding: 10px;
  font-weight: bold;
  font-size: 30px;
  margin: 30px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  max-width: 465px;
  height: 62px;
  text-indent: 12px;
  margin-bottom: 15px;
  border: 1px solid ${theme.border};
  &::placeholder {
    color: ${({ theme }) => theme.placeholderText};
    color: ${theme.placeholderText};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 465px;
  height: 45px;
  border-radius: 10px;
  border: 0px;
  background-color: ${theme.mainColor};
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 15px;
  cursor: pointer;
`;

const SignupButton = styled.button`
  width: 465px;
  height: 45px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
  }
`;
