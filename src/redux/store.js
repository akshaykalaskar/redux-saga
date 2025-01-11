import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'; // Your reducers
import rootSaga from './saga'; // Your saga

// Create Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store
const store = configureStore({
  reducer: rootReducer, // Combine your reducers here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk and add saga
});

// Run the Saga middleware
sagaMiddleware.run(rootSaga);

export default store;
