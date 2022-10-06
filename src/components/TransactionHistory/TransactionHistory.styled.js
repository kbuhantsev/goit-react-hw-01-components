import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 20px auto;
  table-layout: fixed;
  width: 50%;
  border-collapse: collapse;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.lightGreyFont};

  thead th {
    width: 33.33%;
    background-color: ${p => p.theme.colors.lightBlue};
    color: ${p => p.theme.colors.white};
  }

  th,
  td {
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.lightGreyFont};
  }

  td {
    padding-left: calc((100% / 3 / 2) - 30px);
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${p => p.theme.colors.white};
  }
`;
