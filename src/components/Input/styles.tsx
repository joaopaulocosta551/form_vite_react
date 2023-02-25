import styled from "styled-components";

export const InputCustom = styled.input`
  width: 100%;
  height: 30px;
  /* border-radius: 5px; */
  outline: none;
  border: none;

  &::placeholder {
    font-size: 12px;
    color: #8a8a8a;
    padding-left: 5px;
  }
`;

export const DivInputCUstom = styled.div`
  width: 250px;
  padding: 3px 10px;
  display: flex;
  border: solid 1px rgb(17, 31, 67);
  border-radius: 5px;

  & svg{
    cursor: pointer;
  }
`;

export const TitleCaps = styled.span`
  font-size: 10px;
  color: red;
`;
