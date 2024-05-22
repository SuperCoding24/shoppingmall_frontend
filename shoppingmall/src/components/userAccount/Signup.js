import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../style/theme";

//svg
import email from "../../assets/email.svg";
import password from "../../assets/password.svg";
import people from "../../assets/people.svg";
import phone from "../../assets/phone.svg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  //유저 정보
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    phone: "",
    addr: "",
    nickname: "",
    img: null,
  });

  //이미지 미리보기
  // const [preview, setPreview] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((userInfo) => ({
      ...userInfo,
      [name]: value,
    }));
  };

  //isVaild
  const isVaild =
    userInfo.email &&
    userInfo.name &&
    userInfo.phone &&
    userInfo.addr &&
    userInfo.password.length >= 8 &&
    userInfo.password.length <= 20 &&
    userInfo.password === userInfo.passwordCheck;

  //회원가입
  const submitSignup = async () => {
    console.log(userInfo);
    try {
      await fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          email: userInfo.email,
          password: userInfo.password,
          name: userInfo.name,
          phone: userInfo.phone,
          addr: userInfo.addr,
          nickname: userInfo.nickname,
        }),
      });

      // if (!response.ok) {
      //   throw new Error("회원가입에 실패하였습니다.");
      // }
      moveToLogin();
    } catch (error) {
      console.error("에러", error);
    }
  };

  const navigate = useNavigate();
  const moveToLogin = () => {
    navigate("/login", userInfo);
    console.log(userInfo);
  };

  return (
    <>
      <Wrapper>
        <Title>
          <Header>super24</Header>
        </Title>
        <Info>회원정보를 입력해주세요</Info>
        <InputWrapper>
          <InputContainer>
            <IconWrapper>
              <Icon src={email} />
            </IconWrapper>
            <Input
              placeholder="아이디(이메일)"
              type="email"
              value={userInfo.email}
              name="email"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>
            <Input
              placeholder="비밀번호"
              type="password"
              value={userInfo.password}
              name="password"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={password} />
            </IconWrapper>
            <Input
              placeholder="비밀번호 확인"
              type="password"
              value={userInfo.passwordCheck}
              name="passwordCheck"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={people} />
            </IconWrapper>
            <Input
              placeholder="이름"
              value={userInfo.name}
              name="name"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={phone} />
            </IconWrapper>
            <Input
              type="number"
              placeholder="휴대폰 번호"
              value={userInfo.phone}
              name="phone"
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <IconWrapper>
              <Icon src={phone} />
            </IconWrapper>
            <Input
              placeholder="주소"
              value={userInfo.addr}
              name="addr"
              onChange={handleInputChange}
            />
          </InputContainer>

          <FileInputWrapper>
            <FileInfo>나를 나타내는 프로필 사진을 등록해주세요</FileInfo>
            <Input type="file" accept="image/*" name="img" />
          </FileInputWrapper>
          <InputContainer>
            <Input
              placeholder="닉네임"
              value={userInfo.nickname}
              name="nickname"
              onChange={handleInputChange}
            />
          </InputContainer>
        </InputWrapper>
        <SubmitButton disabled={!isVaild} onClick={submitSignup}>
          가입하기
        </SubmitButton>
      </Wrapper>
    </>
  );
};

export default Signup;

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

const Info = styled.h2`
  font-weight: 800;
  margin-bottom: 20px;
  width: 100%;
  max-width: 465px;
  text-align: left;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
  border: 1px solid #000000;
`;

const IconWrapper = styled.div`
  padding: 10px;
  height: 100%
  background-color: ${theme.grayBgColor};
  border-right: 1px solid #000000;
`;

const Icon = styled.img`
  background-color: ${theme.grayBgColor};
`;

const Input = styled.input`
  width: 100%;
  height: 62px;
  text-indent: 12px;
  border: none;
  outline: none;
  border-radius: 0 5px 5px 0;
  &::placeholder {
    color: ${theme.placeholderText};
  }
`;

const FileInputWrapper = styled.div`
  width: 100%;
  max-width: 465px;
  margin-bottom: 10px;
`;

const FileInfo = styled.span`
  display: flex;
  margin: 10px 0 10px 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  max-width: 465px;
  height: 45px;
  border-radius: 10px;
  border: none;
  background-color: ${theme.mainColor};
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  &:disabled {
    background-color: "#F4F4F4";
    cursor: not-allowed;
  }
`;
