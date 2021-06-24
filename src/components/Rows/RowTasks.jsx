import PropTypes from 'prop-types';
import classes from './Rows.module.css';
import { toggleTab } from './rowsClickhandler';
import { EditButton, DeleteButton } from '../Buttons/Buttons';

export function RowTasks(props) {
  const { serialNumber, task } = props;
  const { taskName, description, startDate, deadlineDate } = task;

  const adaptiveTab = (event) => {
    toggleTab(event);
  };

  return (
    <tr className={classes.Row} onClick={adaptiveTab}>
      <td className={classes.Ceil}>{serialNumber}</td>
      <td className={classes.Ceil}>{taskName}</td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Description: </span>
        {description}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Start Date: </span>
        {startDate}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Deadline: </span>
        {deadlineDate}
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

RowTasks.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  task: PropTypes.instanceOf(Object).isRequired,
};
