import styled from '@emotion/styled';

export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding-top: 30px;
  padding-bottom: 30px;
  color: rgba(0, 0, 0, 0.7);
`;

export const StatSect = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  min-width: 300px;
  width: fit-content;
  margin: 20px auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  &:first-of-type {
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-bottom-right-radius: 5px;
  }
`;

export const StatLabel = styled.span`
  color: white;
  font-size: 0.7em;
  margin-bottom: 5px;
`;

export const StatPercentage = styled.span`
  color: white;
`;
