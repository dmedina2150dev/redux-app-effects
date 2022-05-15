import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UserService } from '../../services/user.service';
import * as usersActions from '../actions';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
        ) {}

    loadUsers$ = createEffect(
        //TODO: Necesita un callback que retorne un observable
        () => this.actions$.pipe(//TODO: con el pipe y ofType le digo que accion quiero que escuche
                ofType( usersActions.loadUsers ),

                // TODO: puedo disparar una accion secundaria (En este punto podemos saber que dats esta fluyendeo despues del oftype)
                // tap( data => console.log('Effects tap:', data ) ),
                
                mergeMap(//TODO: Recibe un callback con el observable que queremos disparar 
                    () => this.userService.getAll()
                        .pipe(
                            // tap( data => console.log('getAll effects', data) )
                            map( users => usersActions.loadUsersSuccess( { users } ) ),
                            catchError( error => of(usersActions.loadUsersError( { payload: error } )))
                        )
                )//TODO: Disparar un nuevo observable y que se unan
            )
    );
    

}