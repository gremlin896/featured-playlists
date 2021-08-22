import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureFeaturedPlaylistsComponent } from './feature-featured-playlists.component';
import { PlaylistsModule } from '../components';
import * as fromFeaturedPlaylists from '../state/featured-playlists.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FeaturedPlaylistsEffects } from '../state/featured-playlists.effects';

@NgModule({
  declarations: [FeatureFeaturedPlaylistsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromFeaturedPlaylists.featureKey,
      fromFeaturedPlaylists.reducer
    ),
    EffectsModule.forFeature([FeaturedPlaylistsEffects]),
    PlaylistsModule,
  ],
})
export class FeatureFeaturedPlaylistsModule {}
