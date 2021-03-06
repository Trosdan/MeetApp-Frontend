import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import MeetupNew from '~/pages/MeetupNew';
import MeetupDetails from '~/pages/MeetupDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/meetupEdit" isPrivate component={MeetupNew} />
      <Route path="/meetup/:id" isPrivate component={MeetupDetails} />
    </Switch>
  );
}
