import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  shadow,
  typography,
} from 'styled-system';

export const Box = styled.div`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${background};
  ${border};
  ${shadow};
  ${typography};
  gap: ${({ gap }) => gap || ''};
`;
