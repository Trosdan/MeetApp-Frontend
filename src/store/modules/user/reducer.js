import produce from 'immer';

const INITIAL_STATE = {
  profile: {},
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
    }
  });
}
