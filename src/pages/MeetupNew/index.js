import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import { Container } from './styles';

import ImageInput from './ImageInput';

import {
  meetupCreateRequest,
  meetupUpdateRequest,
} from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
  file_id: Yup.string().required('A foto é obrigatória'),
  title: Yup.string().required('O titulo é obrigatório'),
  description: Yup.string().required('A descripção é obrigatória'),
  date: Yup.date('Data invalida').required('Data é obrigatório'),
  location: Yup.string().required('Local é obrigatório'),
});

export default function MeetupNew({ location: { state } }) {
  const dispatch = useDispatch();
  const [meetup] = useState(
    state
      ? { ...state, date: format(state.date, 'YYYY-MM-DDThh:mm') }
      : {
          title: '',
          description: '',
          date: '',
          location: '',
        }
  );

  async function handlerSubmit(data) {
    console.tron.log(data);
    if (meetup.id) {
      dispatch(meetupUpdateRequest({ ...meetup, ...data }));
    } else {
      dispatch(meetupCreateRequest({ ...meetup, ...data }));
    }
  }

  return (
    <Container>
      {meetup ? (
        <Form initialData={meetup} onSubmit={handlerSubmit} schema={schema}>
          <ImageInput name="file_id" />
          <Input name="title" placeholder="Titulo do meetup" />
          <Input
            className="description"
            name="description"
            placeholder="Descrição completa"
          />
          <Input
            name="date"
            placeholder="Data do meetup"
            type="datetime-local"
          />
          <Input name="location" placeholder="Localização" />
          <button type="submit">Salvar meetup</button>
        </Form>
      ) : null}
    </Container>
  );
}

MeetupNew.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
