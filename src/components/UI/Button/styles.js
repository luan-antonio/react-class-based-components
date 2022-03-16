import styled from "styled-components";

export const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #800040;
  color: white;
  border: 1px solid #800040;
  border-radius: 8px;
  padding: 0.75rem 2rem;

  :hover,
  :active {
    background-color: #630032;
    border-color: #630032;
  }
`;
