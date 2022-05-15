import { createReducer, on } from '@ngrx/store';
import { UsersModule } from 'src/app/users/users.module';
import { loadUsers, loadUsersError, loadUsersSuccess } from '../actions';

export interface UsersState {
    users: UsersModule[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const usersInitialState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
}

export const usersReducer = createReducer(
    usersInitialState,
    on( loadUsers, state => ({ ...state, loading: true })),
    on( loadUsersSuccess, (state, { users }) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [ ...users ] 
    })),
    on( loadUsersError, (state, { payload }) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: payload
    })),

);
