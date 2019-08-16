import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdPermContactCalendar,
  MdLocationOn,
  MdEdit,
  MdDelete,
} from 'react-icons/md';
import PropTypes from 'prop-types';
import history from '~/services/history';

import { meetupLoadRequest } from '~/store/modules/meetup/actions';

import { Container, MeetupHeader, MeetupContent, MeetupFooter } from './styles';

export default function MeetupDetails({ match }) {
  const dispatch = useDispatch();
  const { meetup } = useSelector(state => state.meetup);

  useEffect(() => {
    dispatch(meetupLoadRequest(match.params.id));
  }, [dispatch, match.params.id]);

  function handlerEdit() {
    history.push('/meetupEdit', meetup);
  }

  return (
    <Container>
      <MeetupHeader>
        <h2>{meetup.title}</h2>
        <button className="edit" onClick={handlerEdit} type="button">
          <MdEdit size={18} />
          Editar
        </button>
        <button className="excluir" type="button">
          <MdDelete size={18} />
          Excluir
        </button>
      </MeetupHeader>
      <MeetupContent>
        <img
          src="http://localhost:3333/files/ebf932bf987f0e91460eb6e055857ebd.jpg"
          alt="MeetupFoto"
        />
        <p>{meetup.description}</p>
      </MeetupContent>
      <MeetupFooter>
        <MdPermContactCalendar color="#999" size={18} />
        <span>{meetup.dateFormat}</span>
        <MdLocationOn color="#999" size={18} />
        <span>{meetup.location}</span>
      </MeetupFooter>
    </Container>
  );
}

MeetupDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
