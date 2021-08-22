import { adapter } from './featured-playlists.reducer';
import { createSelector } from '@ngrx/store';
import { selectFeaturedPlaylistsState } from './index';

const { selectAll } = adapter.getSelectors();

export const selectAllFeaturedPlaylists = createSelector(
  selectFeaturedPlaylistsState,
  selectAll
);

export const selectIsLoadingFeaturedPlaylists = createSelector(
  selectFeaturedPlaylistsState,
  (state) => state.loading
);
