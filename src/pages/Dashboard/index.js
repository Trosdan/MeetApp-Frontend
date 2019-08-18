import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { meetupsLoadRequest } from '~/store/modules/meetup/actions';

import { Container, DashboardHeader, MeetupList } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { meetups } = useSelector(state => state.meetup);

  useEffect(() => {
    dispatch(meetupsLoadRequest());
  }, [dispatch]);

  return (
    <Container>
      <DashboardHeader>
        <nav>
          <h2>Meus meetups</h2>
        </nav>
        <aside>
          <Link to="/meetupEdit">
            <button type="button">
              <MdAddCircleOutline size={28} color="#fff" />
              Novo meetup
            </button>
          </Link>
        </aside>
      </DashboardHeader>
      <MeetupList>
        {meetups.map(meetup => (
          <Link key={meetup.id} to={`meetup/${meetup.id}`}>
            <div>
              <h3>{meetup.title}</h3>
              <h4>{meetup.dateFormat}</h4>
              <MdChevronRight size={28} color="#fff" />
            </div>
          </Link>
        ))}
      </MeetupList>
    </Container>
  );
}
