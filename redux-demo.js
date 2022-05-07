const redux = require('redux');
const countReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  } else {
    return state;
  }
};
const store = redux.createStore(countReducer);
console.log('state outside:', store.getState());
const countSubscriber = () => {
  const latestState = store.getState();
  console.log('latestState:', latestState);
}
store.subscribe(countSubscriber);
store.dispatch({ type: 'increment' });
