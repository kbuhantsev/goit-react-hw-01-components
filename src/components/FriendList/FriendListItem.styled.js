import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
`;

// ------ Variant 1
// export const StatusSpan = styled.span`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   margin-right: 10px;
//   background-color: ${props => (props.userStatus ? 'green' : 'red')};
// `;

// ------ Variant 2
export const StatusSpan = styled.span(props => ({
  width: props.theme.space[3] + 'px',
  height: props.theme.space[3] + 'px',
  borderRadius: props.theme.radii.round,
  marginRight: props.theme.space[3] + 'px',
  backgroundColor: props.userStatus ? 'green' : 'red',
}));

export const AvatarImage = styled.img`
  border-radius: ${p => p.theme.radii.normal};
  margin-right: ${p => p.theme.space[3]}px;
`;

export const NamePar = styled.p`
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;
