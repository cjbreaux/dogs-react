const persistDataLocally = store => next => action => {

  // localStorage['reduxStore'] = JSON.stringify(store.getState());
  next(action);
  const state = store.getState();
  const key = state.playerInfo.playerKey;
  localStorage['playerKey'] = key
}

export default persistDataLocally;
