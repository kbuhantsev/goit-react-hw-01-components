import { ContainerDiv } from './Container.styled';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
