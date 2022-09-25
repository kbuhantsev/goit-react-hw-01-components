import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { theme } from 'theme';

function Section({ title, children }) {
  return (
    <Box as="section" pt="20px" pb="20px" bg={theme.colors.sectionBgColor}>
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
