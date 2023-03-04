import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure } from '../../State/Actions/user.actions'
import { UserState } from '../../Interfaces/index';

export const initialState: UserState = {
  user: null,
  error: null,
  loading: false
};

export const userReducer = createReducer(
  initialState,
  on(login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loginSuccess, (state, { user }) => ({
    ...state,
    user: user,
    loading: false,
    error: null
  })),
  on(loginFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false
  }))
);
