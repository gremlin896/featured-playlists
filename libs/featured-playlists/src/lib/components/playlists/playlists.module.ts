import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistsComponent } from './playlists.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [PlaylistsComponent],
  exports: [PlaylistsComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class PlaylistsModule {}
