import PropTypes from 'prop-types';
import noop from '../../shared/noop';
import classes from './Buttons.module.css';

function Button(props) {
  const { children, onClick, className } = props;

  return (
    <button className={`${classes.Button} ${className}`} type='button' onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string.isRequired,
};
Button.defaultProps = {
  onClick: noop,
  children: null,
};

export function TasksButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.BlueButton} onClick={onClick}>
      Tasks
    </Button>
  );
}

TasksButton.propTypes = {
  onClick: PropTypes.func,
};
TasksButton.defaultProps = {
  onClick: noop,
};

export function ProgressButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.BlueButton} onClick={onClick}>
      Progress
    </Button>
  );
}

ProgressButton.propTypes = {
  onClick: PropTypes.func,
};
ProgressButton.defaultProps = {
  onClick: noop,
};

export function EditButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.YellowButton} onClick={onClick}>
      Edit
    </Button>
  );
}

EditButton.propTypes = {
  onClick: PropTypes.func,
};
EditButton.defaultProps = {
  onClick: noop,
};

export function DeleteButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.RedButton} onClick={onClick}>
      Delete
    </Button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func,
};
DeleteButton.defaultProps = {
  onClick: noop,
};

export function CreateButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.BlueButton} onClick={onClick}>
      Create
    </Button>
  );
}

CreateButton.propTypes = {
  onClick: PropTypes.func,
};
CreateButton.defaultProps = {
  onClick: noop,
};

export function BackButton(props) {
  const { onClick } = props;

  return (
    <Button className={classes.WhiteButton} onClick={onClick}>
      Back To List
    </Button>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func,
};
BackButton.defaultProps = {
  onClick: noop,
};

export function ActiveButton(props) {
  const { onClick, hide } = props;

  return (
    <Button className={`${classes.BlueButton} ${hide ? classes.Hide : ''}`} onClick={onClick}>
      Active
    </Button>
  );
}

ActiveButton.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
};
ActiveButton.defaultProps = {
  onClick: noop,
  hide: false,
};

export function FailButton(props) {
  const { onClick, hide } = props;

  return (
    <Button className={`${classes.RedButton} ${hide ? classes.Hide : ''}`} onClick={onClick}>
      Fail
    </Button>
  );
}

FailButton.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
};
FailButton.defaultProps = {
  onClick: noop,
  hide: false,
};

export function SuccessButton(props) {
  const { onClick, hide } = props;

  return (
    <Button className={`${classes.GreenButton} ${hide ? classes.Hide : ''}`} onClick={onClick}>
      Success
    </Button>
  );
}

SuccessButton.propTypes = {
  onClick: PropTypes.func,
  hide: PropTypes.bool,
};
SuccessButton.defaultProps = {
  onClick: noop,
  hide: false,
};
