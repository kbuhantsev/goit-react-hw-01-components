import { Box } from 'components/Box';
import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <Box as="section" pt="20px" pb="20px" bg="#e7ecf2">
      {title && <h2>{title}</h2>}
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
