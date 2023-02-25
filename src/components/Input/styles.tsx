import styled from "styled-components";

export const InputCustom = styled.input`
  width: 250px;
  height: 30px;
  border-radius: 5px;
  outline: none;
  border: solid 1px rgb(17, 31, 67);

  &::placeholder {
    font-size: 12px;
    color: #8a8a8a;
    padding-left: 5px;
  }
`;

export const DivInputCUstom = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TitleCaps = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 24px;
  top: 120px;
`;
