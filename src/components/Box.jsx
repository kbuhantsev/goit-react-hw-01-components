import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  background,
  border,
  shadow,
} from 'styled-system';

export const Box = styled.div`
  ${space};
  ${color};
  ${layout};
  ${flexbox};
  ${background};
  ${border};
  ${shadow};
  gap: ${({ gap }) => gap || ''};
`;
