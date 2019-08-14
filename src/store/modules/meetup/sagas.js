import { takeLatest, all, put, call } from 'redux-saga/effects';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { meetupsLoadSuccess, meetupsLoadFailure } from './actions';

export function* loadRequest() {
  try {
    const response = yield call(api.get, 'meetup');
    const data = response.data.map(meetup => {
      const dateFormat = format(meetup.date, 'DD [de] MMMM[, às ]HH[h]', {
        locale: pt,
      });

      return { ...meetup, dateFormat };
    });
    yield put(meetupsLoadSuccess(data));
  } catch (err) {
    toast.error('Não foi possivel carregar os Meetups');
    yield put(meetupsLoadFailure());
  }
}

export default all([takeLatest('@meetup/MEETUPS_LOAD_REQUEST', loadRequest)]);
