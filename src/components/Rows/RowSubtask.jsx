import PropTypes from 'prop-types';
import classes from './Rows.module.css';
import { toggleTab } from './rowsClickhandler';
import { EditButton, DeleteButton } from '../Buttons/Buttons';

export function RowSubtask(props) {
  const { serialNumber, userSubtask } = props;
  const { taskName, description, startDate } = userSubtask;

  const adaptiveTab = (event) => {
    toggleTab(event);
  };

  return (
    <tr className={classes.Row} onClick={adaptiveTab}>
      <td className={classes.Ceil}>{serialNumber}</td>
      <td className={classes.Ceil}>{taskName}</td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Note: </span>
        {description}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Date: </span>
        {startDate}
      </td>
      <td className={classes.Ceil}>
        <div className={classes.ButtonsBlock}>
          <div className={classes.ButtonsRow}>
            <EditButton />
            <DeleteButton />
          </div>
        </div>
      </td>
    </tr>
  );
}

RowSubtask.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  userSubtask: PropTypes.instanceOf(Object).isRequired,
};
