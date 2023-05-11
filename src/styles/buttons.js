import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 5px;
  border: 5px solid ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  &.large {
    width: 200px;
    height: 45px;
  }
  &.medium {
    width: 150px;
    height: 40px;
  }
  &.small {
    width: 100px;
    height: 35px;
  }
`;
export const ClickButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
`;
