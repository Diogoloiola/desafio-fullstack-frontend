import styled from "styled-components";

export const Container = styled.section`
  margin-top: 30px;
`;
export const Button = styled.button`
  display: block;
  padding: 10px 15px;
  background-color: #1598fa;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  margin: auto;
  cursor: pointer;
`;

export const TableRow = styled.tr`
  display: ${({ gender, filter }) =>
    gender === filter ? "" : filter === "-" ? "" : "none"};
`;
