import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  margin: 20px auto;

  background-color: white;
  border-radius: ${p => p.theme.radii.normal};

  color: ${p => p.theme.colors.lightGreyFont};
  font-weight: ${p => p.theme.fontWeights.medium};

  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  width: 10em;
  border-radius: ${p => p.theme.radii.round};
  background-color: ${p => p.theme.colors.lightGreyFont};
`;

export const Name = styled.p`
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkGreyFont};
`;

export const UserContacts = styled.p`
  font-size: ${p => p.theme.fontSizes.l}px;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
  border-top: ${p => p.theme.borders.normal};
  ${p => p.theme.colors.lightGreyFont};

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
      border-bottom-left-radius: ${p => p.theme.radii.normal};
    }
    &:last-child {
      border-bottom-right-radius: ${p => p.theme.radii.normal};
    }
    &:not(:last-child) {
      border-right: ${p => p.theme.borders.normal};
      ${p => p.theme.colors.lightGreyFont};
    }
  }
`;

export const Label = styled.span`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darkGreyFont};
`;
