import PropTypes from 'prop-types';
import noop from '../../shared/noop';
import classes from './Header.module.css';
import { Burger } from './Burger';

export function Header(props) {
  const { isNavOpen, burgerOnClick } = props;

  return (
    <header className={classes.Header}>
      <Burger isOpen={isNavOpen} onClick={burgerOnClick} />
      <h1 className={classes.Title}>Have a productive day!</h1>
    </header>
  );
}

Header.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  burgerOnClick: PropTypes.func,
};

Header.defaultProps = {
  burgerOnClick: noop,
};
