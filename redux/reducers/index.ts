import userReducer from './user';

/* type UserReducer = {
  name: string,
  surname: string
};

export interface IAppState {
  user?: UserReducer;
} */

const rootReducer: object = {
  user: userReducer,
};

export default rootReducer;