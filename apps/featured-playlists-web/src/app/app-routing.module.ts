import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'featured-playlists',
    pathMatch: 'full',
  },
  {
    path: 'featured-playlists',
    loadChildren: () =>
      import('@featured-playlists/featured-playlists').then(
        (m) => m.FeaturedPlaylistsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
