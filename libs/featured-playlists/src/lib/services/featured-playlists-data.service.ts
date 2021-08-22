import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FEATURED_PLAYLISTS_ENDPOINT,
  FeaturedPlaylist,
  FeaturedPlaylistsResponse,
} from '../models';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FeaturedPlaylistsDataService {
  constructor(
    private http: HttpClient,
    @Inject(FEATURED_PLAYLISTS_ENDPOINT)
    private endpoint: string
  ) {}

  getFeaturedPlaylists(): Observable<FeaturedPlaylist[]> {
    return this.http
      .get<FeaturedPlaylistsResponse>(this.endpoint)
      .pipe(pluck('featuredPlaylists', 'content'));
  }
}
