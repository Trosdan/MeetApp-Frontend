import React from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, DashboardHeader, MeetupList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <DashboardHeader>
        <nav>
          <h2>Meus meetups</h2>
        </nav>
        <aside>
          <button type="button">
            <MdAddCircleOutline size={28} color="#fff" />
            Novo meetup
          </button>
        </aside>
      </DashboardHeader>
      <MeetupList>
        <div>
          <h3>Meetup</h3>
          <h4>12 de Agosto, as 14h</h4>
          <MdChevronRight size={28} color="#fff" />
        </div>
        <div>
          <h3>Meetup</h3>
          <h4>12 de Agosto, as 14h</h4>
          <MdChevronRight size={28} color="#fff" />
        </div>
        <div>
          <h3>Meetup</h3>
          <h4>12 de Agosto, as 14h</h4>
          <MdChevronRight size={28} color="#fff" />
        </div>
        <div>
          <h3>Meetup</h3>
          <h4>12 de Agosto, as 14h</h4>
          <MdChevronRight size={28} color="#fff" />
        </div>
      </MeetupList>
    </Container>
  );
}
