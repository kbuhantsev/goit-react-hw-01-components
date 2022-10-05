import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  margin: 20px auto;

  background-color: white;
  border-radius: 5px;

  color: ${p => p.theme.colors.lightFreyFont};
  font-weight: 500;

  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  width: 10em;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.lightFreyFont};
`;

export const Name = styled.p`
  font-size: 2em;
  font-weight: 700;
  color: ${p => p.theme.colors.darkGreyFont};
`;

export const UserContacts = styled.p`
  font-size: 1.2em;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: 1px solid ${p => p.theme.colors.lightFreyFont};

  & > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    width: 100%;
    height: 70px;
    background-color: ${p => p.theme.colors.statBgColor};

    &:first-of-type {
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
    }
    &:not(:last-child) {
      border-right: 1px solid ${p => p.theme.colors.lightFreyFont};
    }
  }
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  font-size: 1.3em;
  font-weight: 700;
  color: ${p => p.theme.colors.darkGreyFont};
`;
