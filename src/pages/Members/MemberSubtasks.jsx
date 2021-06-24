import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pageClasses from '../Page.module.css';
import tableClasses from '../Table.module.css';
import { CreateButton, BackButton } from '../../components/Buttons/Buttons';
import { TableHead } from '../../components/Rows/RowTableHead';
import { RowSubtask } from '../../components/Rows/RowSubtask';
import { usersSubtasks } from '../../data/data';

export function MemberSubtasks(props) {
  const {
    match: {
      params: { userId, taskId },
    },
  } = props;
  const currentUserSubtasks = usersSubtasks.filter(
    (obj) => obj.userId === Number(userId) && obj.taskId === Number(taskId),
  );
  const headData =
    currentUserSubtasks.length > 0 ? ['#', 'Subtask Name', 'Note', 'Date', 'Action'] : ['No subtasks found'];

  return (
    <div className={pageClasses.Container}>
      <div className={pageClasses.Top}>
        <h1 className={pageClasses.Title}>Subtasks</h1>
        <div>
          <Link to={`/MemberTasks/${userId}`}>
            <BackButton />
          </Link>
          <CreateButton />
        </div>
      </div>
      <table className={tableClasses.Table}>
        <TableHead headData={headData} />
        <tbody>
          {currentUserSubtasks.map((userSubtask, index) => {
            return <RowSubtask key={userSubtask.taskId} serialNumber={index + 1} userSubtask={userSubtask} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

MemberSubtasks.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
