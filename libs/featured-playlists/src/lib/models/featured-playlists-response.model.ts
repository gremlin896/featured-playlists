import { FeaturedPlaylist } from './featured-playlist.model';

export interface FeaturedPlaylistsResponse {
  featuredPlaylists: {
    name: 'Featured Playlists';
    content: FeaturedPlaylist[];
  };
}
