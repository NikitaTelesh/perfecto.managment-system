import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Rows.module.css';
import { calculateAge } from '../../services/Date/calculateAge';
import { toggleTab } from './rowsClickhandler';
import { TasksButton, ProgressButton, EditButton, DeleteButton } from '../Buttons/Buttons';

export function RowMembers(props) {
  const { serialNumber, userProfile } = props;
  const { fullName, direction, education, startDate, birthDate, userId } = userProfile;
  const age = calculateAge(birthDate);

  const adaptiveTab = (event) => {
    toggleTab(event);
  };

  return (
    <tr className={classes.Row} onClick={adaptiveTab}>
      <td className={classes.Ceil}>{serialNumber}</td>
      <td className={classes.Ceil}>{fullName}</td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Direction: </span>
        {direction}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Education: </span>
        {education}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Start: </span>
        {startDate}
      </td>
      <td className={classes.Ceil}>
        <span className={classes.MobileCategory}>Age: </span>
        {age}
      </td>
      <td className={classes.Ceil}>
        <div className={classes.ButtonsBlock}>
          <div className={classes.ButtonsRow}>
            <Link to={`/MemberTasks/${userId}`}>
              <TasksButton />
            </Link>
            <ProgressButton />
          </div>
          <div className={classes.ButtonsRow}>
            <EditButton />
            <DeleteButton />
          </div>
        </div>
      </td>
    </tr>
  );
}

RowMembers.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  userProfile: PropTypes.instanceOf(Object).isRequired,
};
