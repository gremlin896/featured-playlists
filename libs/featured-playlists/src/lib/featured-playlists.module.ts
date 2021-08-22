import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FeatureFeaturedPlaylistsComponent,
  FeatureFeaturedPlaylistsModule,
} from './feature-featured-playlists';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: FeatureFeaturedPlaylistsComponent,
      },
    ]),
    FeatureFeaturedPlaylistsModule,
  ],
})
export class FeaturedPlaylistsModule {}
