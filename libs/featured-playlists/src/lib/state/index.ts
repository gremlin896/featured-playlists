import * as fromFeaturedPlaylists from './featured-playlists.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
  [fromFeaturedPlaylists.featureKey]: fromFeaturedPlaylists.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromFeaturedPlaylists.featureKey]: fromFeaturedPlaylists.reducer,
};

export const selectFeaturedPlaylistsState = createFeatureSelector<fromFeaturedPlaylists.State>(
  fromFeaturedPlaylists.featureKey
);
