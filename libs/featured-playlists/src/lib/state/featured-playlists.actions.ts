import { createAction, props } from '@ngrx/store';
import { FeaturedPlaylist } from '../models';

const actionsKey = '[Featured Playlists]';

export const loadFeaturedPlaylists = createAction(
  `${actionsKey} Load Featured Playlists`
);

export const loadFeaturedPlaylistsSuccess = createAction(
  `${actionsKey} Load Featured Playlists Success`,
  props<{ payload: FeaturedPlaylist[] }>()
);

export const setLoading = createAction(
  `${actionsKey} Set Featured Playlists Loading`,
  props<{ isLoading: boolean }>()
);
