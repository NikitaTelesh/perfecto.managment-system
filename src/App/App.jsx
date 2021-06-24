import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Nav } from '../components/Nav/Nav';
import { Members } from '../pages/Members/Members';
import { Tasks } from '../pages/Tasks/Tasks';
import { MemberTasks } from '../pages/Members/MemberTasks';
import { MemberSubtasks } from '../pages/Members/MemberSubtasks';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav = () => {
    const { isNavOpen } = this.state;
    this.setState({ isNavOpen: !isNavOpen });
  };

  render() {
    const { isNavOpen } = this.state;

    return (
      <>
        <Nav isNavOpen={isNavOpen} />
        <div className='content'>
          <Header isNavOpen={isNavOpen} burgerOnClick={this.toggleNav} />
          <Switch>
            <Route exact path='/' component={Members} />
            <Route path='/MemberTasks/:id' component={MemberTasks} />
            <Route path='/MemberSubtasks/:userId/:taskId' component={MemberSubtasks} />
            <Route path='/Tasks' component={Tasks} />
          </Switch>
        </div>
      </>
    );
  }
}
