// import css from './Section.module.css';
import PropTypes from 'prop-types';
import { SectionStyle } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
