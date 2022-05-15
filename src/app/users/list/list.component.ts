import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { loadUsers } from 'src/app/store/actions';
import { User } from '../../models/user.model';
import { AppState } from '../../store/app.reducers';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styles: [],
})
export class ListComponent implements OnInit, OnDestroy {

	users!: User[];
	users$!: Subscription;


	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
		this.store.dispatch( loadUsers() );
		// this.users$ = this.userService.getAll().subscribe( ( users: User[] ) => this.users = users );
	}

	ngOnDestroy(): void {
		this.users$?.unsubscribe();
	}
}
