import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 20px auto;
  table-layout: fixed;
  width: 50%;
  border-collapse: collapse;
  border: 1px solid lightgray;

  thead th {
    width: 33.33%;
    background-color: lightskyblue;
    color: white;
  }

  th,
  td {
    padding: 10px;

    border: 1px solid lightgray;
  }

  td {
    padding-left: calc((100% / 3 / 2) - 30px);
  }

  tbody tr:nth-of-type(even) {
    background-color: rgb(232, 241, 245);
  }

  tbody tr:nth-of-type(odd) {
    background-color: white;
  }
`;
