import { PlaylistsComponent } from './playlists.component';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { MatListItem, MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {
  MatProgressSpinnerModule,
  MatSpinner,
} from '@angular/material/progress-spinner';
import { FeaturedPlaylist } from '../../models';

describe('PlaylistsComponent', () => {
  const createComponent = createComponentFactory({
    imports: [MatCardModule, MatProgressSpinnerModule, MatListModule],
    component: PlaylistsComponent,
  });

  function init() {
    const spectator = createComponent();

    return { spectator };
  }

  it('should create', () => {
    const { spectator } = init();

    expect(spectator.component).toBeTruthy();
  });

  it('should display playlist per playlist input item, and bind to its properties', () => {
    const { spectator } = init();

    const mockPlaylists: FeaturedPlaylist[] = [
      {
        curator_name: 'a',
        artwork: 'http://someimagehost.com/someimage.jpg',
        name: 'c',
        id: 'd',
        kind: 'e',
        url: 'http://url1.com',
      },
      {
        curator_name: 'g',
        artwork: 'http://someimagehost.com/someimage2.jpg',
        name: 'i',
        id: 'j',
        kind: 'k',
        url: 'http://url2.com',
      },
    ];

    spectator.setInput('playlists', mockPlaylists);

    const playlistEls = spectator.queryAll(MatListItem);

    expect(playlistEls).toHaveLength(mockPlaylists.length);

    const anchorEls = spectator.queryAll('a');

    const hrefs = anchorEls.map((el) => el.getAttribute('href'));

    expect(hrefs).toEqual(mockPlaylists.map((pl) => pl.url));

    // TODO: could check other properties are bound
  });

  it('should only show spinner when loading input is true', () => {
    const { spectator } = init();

    expect(spectator.query(MatSpinner)).toBeFalsy();

    spectator.setInput('loading', true);

    expect(spectator.query(MatSpinner)).toBeTruthy();
  });
});
