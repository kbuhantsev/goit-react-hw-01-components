import { Box } from 'components/Box';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <Box maxWidth="1170px" margin="0 auto" pl="15px" pr="15px">
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
