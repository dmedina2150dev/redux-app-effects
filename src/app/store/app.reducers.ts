import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';


export interface AppState {
   users: reducers.UsersState
}



export const APP_REDUCERS: ActionReducerMap<AppState> = {
   users: reducers.usersReducer,
}