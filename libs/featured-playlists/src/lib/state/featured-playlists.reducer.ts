import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { FeaturedPlaylist } from '../models';
import { Action, createReducer, on } from '@ngrx/store';
import * as FeaturedPlaylistsActions from './featured-playlists.actions';

export const featureKey = 'featured-playlists';

export interface State extends EntityState<FeaturedPlaylist> {
  loading: boolean;
}

export const adapter = createEntityAdapter<FeaturedPlaylist>();

export const initialState: State = adapter.getInitialState({
  loading: false,
});

const featuredPlaylistsReducer = createReducer(
  initialState,
  on(FeaturedPlaylistsActions.setLoading, (state, { isLoading }) => ({
    ...state,
    loading: isLoading,
  })),
  on(
    FeaturedPlaylistsActions.loadFeaturedPlaylistsSuccess,
    (state, { payload }) => adapter.setAll(payload, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return featuredPlaylistsReducer(state, action);
}
