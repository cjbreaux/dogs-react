const persistDataLocally = store => next => action => {

  // localStorage['reduxStore'] = JSON.stringify(store.getState());
  next(action);
  const state = store.getState();
  const key = state.playerInfo.playerKey;
  console.log('Local Storage', key);
}

export default persistDataLocally;
