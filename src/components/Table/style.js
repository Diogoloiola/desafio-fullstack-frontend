import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 300px;
  margin-top: 30px;
  overflow-y: auto;
  margin-bottom: 30px;
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
  background-color: ${(props) => props.color ? '#007bff' : '#d9534f'};
`;

export const TableRow = styled.tr`
  display: ${({ gender, filter }) =>
    gender === filter ? "" : filter === "-" ? "" : "none"};
`;
