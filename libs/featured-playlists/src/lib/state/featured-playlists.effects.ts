import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FeaturedPlaylistsActions from './featured-playlists.actions';
import { map, switchMapTo, tap } from 'rxjs/operators';
import { FeaturedPlaylistsDataService } from '../services';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class FeaturedPlaylistsEffects {
  loadFeaturedPlaylists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeaturedPlaylistsActions.loadFeaturedPlaylists),
      tap(() => this.setLoading(true)),
      switchMapTo(this.service.getFeaturedPlaylists()),
      tap(() => this.setLoading(false)),
      map((payload) =>
        FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess({ payload })
      )
    )
  );

  constructor(
    private actions$: Actions,
    private service: FeaturedPlaylistsDataService,
    private store: Store
  ) {}

  private setLoading(isLoading: boolean) {
    this.store.dispatch(FeaturedPlaylistsActions.setLoading({ isLoading }));
  }
}
