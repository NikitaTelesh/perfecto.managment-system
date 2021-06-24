import pageClasses from '../Page.module.css';
import tableClasses from '../Table.module.css';
import { CreateButton } from '../../components/Buttons/Buttons';
import { TableHead } from '../../components/Rows/RowTableHead';
import { RowMembers } from '../../components/Rows/RowMembers';
import { usersProfiles } from '../../data/data';

export function Members() {
  const headData =
    usersProfiles.length > 0
      ? ['#', 'Full Name', 'Direction', 'Education', 'Start', 'Age', 'Action']
      : ['No members found'];

  return (
    <div className={pageClasses.Container}>
      <div className={pageClasses.Top}>
        <h1 className={pageClasses.Title}>Members</h1>
        <CreateButton />
      </div>
      <table className={tableClasses.Table}>
        <TableHead headData={headData} />
        <tbody>
          {usersProfiles.map((userProfile, index) => {
            return <RowMembers key={userProfile.userId} serialNumber={index + 1} userProfile={userProfile} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
