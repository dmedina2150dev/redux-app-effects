import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { loadUser } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styles: [
	]
})
export class UserComponent implements OnInit, OnDestroy {

	user!: User | null;
	user$!: Subscription;
	paramsSub$!: Subscription;
	loading: boolean = false;
	error: any;

	constructor(
		private asctivateRoute: ActivatedRoute,
		private store: Store<AppState>
		) { }

	ngOnInit(): void {

		this.store.select('user')
			.subscribe( ({ user, loading, error } ) => {
				this.user = user;
				this.loading = loading;
				this.error = error;
			})

		this.asctivateRoute.params.subscribe( ({ id }) => {
			console.log(id)
			this.store.dispatch( loadUser( { id } ));
		});
	}

	ngOnDestroy(): void {
		
	}

}
