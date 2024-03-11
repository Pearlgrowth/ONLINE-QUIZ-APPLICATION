import storage from 'redux-persist/lib/storage'; // Use localStorage by default

export const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Storage engine (localStorage or sessionStorage)
  whitelist: ['questions', 'result'], // List of reducers to persist
};
