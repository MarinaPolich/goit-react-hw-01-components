import styled from "styled-components";

export const TransactionHistoryTable = styled.table`
  width: 500px;
  border-collapse: collapse;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
`;

export const TableHead = styled.thead`
  background-color: #12e5eb;
  color: #fff;
  text-transform: uppercase;
`;

export const TableTh = styled.th`
  padding: 15px;
  border-right: 1px solid #fff;
  text-align: center;
`;

export const TableTr = styled.tr`
  &:nth-child(even) {
    background-color: #fff;
  }
`;

export const TableTd = styled.td`
  padding: 15px;
  border: 1px solid grey;
  text-align: center;
  color: grey;
  text-transform: capitalize;
`;
