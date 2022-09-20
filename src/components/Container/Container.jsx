import css from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
