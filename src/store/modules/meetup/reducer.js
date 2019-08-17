import produce from 'immer';

const INITIAL_STATE = {
  meetups: [],
  meetup: {},
  loading: false,
};

export default function Meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/MEETUPS_LOAD_REQUEST':
        draft.loading = true;
        break;
      case '@meetup/MEETUPS_LOAD_SUCCESS':
        draft.meetups = action.payload.meetups;
        draft.loading = false;
        break;
      case '@meetup/MEETUPS_LOAD_FAILURE':
        draft.loading = false;
        break;

      case '@meetup/MEETUP_LOAD_REQUEST':
        draft.loading = true;
        break;
      case '@meetup/MEETUP_LOAD_SUCCESS':
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      case '@meetup/MEETUP_LOAD_FAILURE':
        draft.loading = false;
        break;
      default:
    }
  });
}
