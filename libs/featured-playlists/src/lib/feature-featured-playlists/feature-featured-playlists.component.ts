import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as FeaturedPlaylistsActions from '../state/featured-playlists.actions';
import * as FeaturedPlaylistsSelectors from '../state/featured-playlists.selectors';

@Component({
  selector: 'fp-feature-featured-playlists',
  template: ` <fp-playlists
    class="mat-elevation-z8"
    [playlists]="featuredPlaylists$ | async"
    [loading]="isLoading$ | async"
  ></fp-playlists>`,
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-around;
        padding: 20px;
      }

      fp-playlists {
        flex-grow: 0.2;
        min-width: 200px;
        max-width: 600px;
      }
    `,
  ],
})
export class FeatureFeaturedPlaylistsComponent implements OnInit {
  featuredPlaylists$ = this.store.select(
    FeaturedPlaylistsSelectors.selectAllFeaturedPlaylists
  );

  isLoading$ = this.store.select(
    FeaturedPlaylistsSelectors.selectIsLoadingFeaturedPlaylists
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(FeaturedPlaylistsActions.loadFeaturedPlaylists());
  }
}
