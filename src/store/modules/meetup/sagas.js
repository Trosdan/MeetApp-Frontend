import { takeLatest, all, put, call } from 'redux-saga/effects';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  meetupsLoadSuccess,
  meetupsLoadFailure,
  meetupLoadSuccess,
  meetupLoadFailure,
} from './actions';

export function* meetupsloadRequest() {
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

export function* meetuploadRequest({ payload: { id } }) {
  try {
    const response = yield call(api.get, `meetup/${id}`);
    const dateFormat = format(response.data.date, 'DD [de] MMMM[, às ]HH[h]', {
      locale: pt,
    });
    yield put(meetupLoadSuccess({ ...response.data, dateFormat }));
  } catch (err) {
    toast.error('Não foi possivel carregar os Meetups');
    yield put(meetupLoadFailure());
  }
}

export default all([
  takeLatest('@meetup/MEETUPS_LOAD_REQUEST', meetupsloadRequest),
  takeLatest('@meetup/MEETUP_LOAD_REQUEST', meetuploadRequest),
]);
