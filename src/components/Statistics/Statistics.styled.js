import styled from 'styled-components';

export const StatTitle = styled.h2`
  text-transform: uppercase;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: rgba(0, 0, 0, 0.7);
`;

export const StatSect = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${p => p.theme.colors.white};
  min-width: 300px;
  width: fit-content;
  margin: ${p => p.theme.space[4]}px auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border-bottom-left-radius: ${p => p.theme.radii.normal};
  border-bottom-right-radius: ${p => p.theme.radii.normal};
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
  padding: ${p => p.theme.space[3]}px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  &:first-of-type {
    border-bottom-left-radius: ${p => p.theme.radii.normal};
  }
  &:last-child {
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
`;

export const StatLabel = styled.span`
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[0]}px;
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const StatPercentage = styled.span`
  color: ${p => p.theme.colors.white};
`;
