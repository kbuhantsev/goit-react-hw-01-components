import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
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
export const StatusSpan = styled.span(({ userStatus }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  marginRight: '10px',
  backgroundColor: userStatus ? 'green' : 'red',
}));

export const AvatarImage = styled.img`
  border-radius: 5px;
  margin-right: 10px;
`;

export const NamePar = styled.p`
  font-size: 1.2em;
  font-weight: 500;
`;
