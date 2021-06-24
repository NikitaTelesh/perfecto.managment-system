import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import pageClasses from '../Page.module.css';
import tableClasses from '../Table.module.css';
import { RowMemberTask } from '../../components/Rows/RowMemberTask';
import { TableHead } from '../../components/Rows/RowTableHead';
import { BackButton } from '../../components/Buttons/Buttons';
import { usersTasks, usersProfiles } from '../../data/data';

export function MemberTasks(props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const currentUserTasks = usersTasks.filter((obj) => obj.userId === Number(id));
  const { fullName } = usersProfiles.find((user) => user.userId === Number(id));
  const headData =
    currentUserTasks.length > 0
      ? ['#', 'Task Name', 'Start Date', 'Deadline', 'Status', 'Update status']
      : ['No tasks found'];

  return (
    <div className={pageClasses.Container}>
      <div className={pageClasses.Top}>
        <h1 className={pageClasses.Title}>{`${fullName}: current tasks`}</h1>
        <Link to='/'>
          <BackButton />
        </Link>
      </div>
      <table className={tableClasses.Table}>
        <TableHead headData={headData} />
        <tbody>
          {currentUserTasks.map((userTask, index) => {
            return <RowMemberTask key={userTask.taskId} serialNumber={index + 1} userTask={userTask} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

MemberTasks.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
