import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { format } from 'date-fns';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { Container } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descripção é obrigatória'),
  date: Yup.date('Data invalida').required('Data é obrigatório'),
  location: Yup.string().required('Local é obrigatório'),
});

export default function MeetupNew({ location: { state } }) {
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    if (state) {
      setMeetup({ ...state, date: format(state.date, 'YYYY-MM-DDThh:mm') });
    } else {
      setMeetup({
        title: '',
        description: '',
        date: '',
        location: '',
      });
    }
  }, [state]);

  function handlerSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handlerSubmit} schema={schema}>
        <Input name="title" placeholder="Titulo do meetup" />
        <Input name="description" placeholder="Descrição completa" />
        <Input name="date" placeholder="Data do meetup" type="datetime-local" />
        <Input name="location" placeholder="Localização" />
        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}

MeetupNew.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
