import PropTypes from 'prop-types';
import noop from '../../shared/noop';
import classes from './Burger.module.css';

export function Burger(props) {
  const { isOpen, onClick } = props;

  return (
    <button type='button' className={`${classes.Burger} ${isOpen ? classes.Open : ''}`} onClick={onClick}>
      <div className={classes.Line} />
      <div className={classes.Line} />
      <div className={classes.Line} />
      <div className={classes.Line} />
    </button>
  );
}

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  onClick: noop,
};
