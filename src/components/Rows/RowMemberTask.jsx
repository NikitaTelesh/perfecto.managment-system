import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Rows.module.css';
import { toggleTab } from './rowsClickhandler';
import { ActiveButton, FailButton, SuccessButton } from '../Buttons/Buttons';

export class RowMemberTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: props.userTask.state,
    };
  }

  setStatusColor() {
    const { status } = this.state;

    if (status === 'Success') {
      return 'green';
    }

    if (status === 'Fail') {
      return 'red';
    }

    return 'blue';
  }

  adaptiveTab = (event) => {
    toggleTab(event);
  };

  setActiveStatus = () => {
    this.setState({ status: 'Active' });
  };

  setSuccessStatus = () => {
    this.setState({ status: 'Success' });
  };

  setFailStatus = () => {
    this.setState({ status: 'Fail' });
  };

  render() {
    const { serialNumber, userTask } = this.props;
    const { taskName, startDate, deadlineDate, userId, taskId } = userTask;
    const { status } = this.state;

    const statusColor = this.setStatusColor();

    return (
      <tr className={classes.Row} onClick={this.adaptiveTab}>
        <td className={classes.Ceil}>{serialNumber}</td>
        <td className={classes.Ceil}>
          <Link to={`/MemberSubtasks/${userId}/${taskId}`}>{taskName}</Link>
        </td>
        <td className={classes.Ceil}>
          <span className={classes.MobileCategory}>Start Date: </span>
          {startDate}
        </td>
        <td className={classes.Ceil}>
          <span className={classes.MobileCategory}>Deadline: </span>
          {deadlineDate}
        </td>
        <td className={classes.Ceil} style={{ color: statusColor, fontWeight: 700 }}>
          <span className={classes.MobileCategory}>Status: </span>
          {status}
        </td>
        <td className={classes.Ceil}>
          <div className={classes.ButtonsBlock}>
            <div className={classes.ButtonsRow}>
              <ActiveButton hide={status === 'Active'} onClick={this.setActiveStatus} />
              <SuccessButton hide={status === 'Success'} onClick={this.setSuccessStatus} />
              <FailButton hide={status === 'Fail'} onClick={this.setFailStatus} />
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

RowMemberTask.propTypes = {
  serialNumber: PropTypes.number.isRequired,
  userTask: PropTypes.instanceOf(Object).isRequired,
};
