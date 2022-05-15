import { createAction, props } from '@ngrx/store';
import { UsersModule } from 'src/app/users/users.module';

export const loadUsers = createAction('[Users] Load Users');

export const loadUsersSuccess = createAction(
    '[Users] Load Users Success',
    props<{ users: UsersModule[] }>()
);

export const loadUsersError = createAction(
    '[Users] Load Users Error',
    props<{ payload: any }>()
); 