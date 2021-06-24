import pageClasses from '../Page.module.css';
import tableClasses from '../Table.module.css';
import { CreateButton } from '../../components/Buttons/Buttons';
import { TableHead } from '../../components/Rows/RowTableHead';
import { RowTasks } from '../../components/Rows/RowTasks';
import { tasks } from '../../data/data';

export function Tasks() {
  const headData =
    tasks.length > 0 ? ['#', 'Task Name', 'Description', 'Start Date', 'Deadline', 'Action'] : ['No tasks found'];

  return (
    <div className={pageClasses.Container}>
      <div className={pageClasses.Top}>
        <h1 className={pageClasses.Title}>Tasks</h1>
        <CreateButton />
      </div>
      <table className={tableClasses.Table}>
        <TableHead headData={headData} />
        <tbody>
          {tasks.map((task, index) => {
            return <RowTasks key={task.taskId} serialNumber={index + 1} task={task} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
