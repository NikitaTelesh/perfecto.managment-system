import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import classes from './Nav.module.css';

export function Nav(props) {
  const { isNavOpen } = props;
  const navWidth = isNavOpen ? '200px' : '0px';

  return (
    <nav style={{ width: navWidth }} className={classes.Nav}>
      <Logo className={classes.Logo} />
      <ul className={classes.List}>
        <li>
          <Link to='/'>Members</Link>
          <Link to='/Tasks'>Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
};
