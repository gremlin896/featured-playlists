import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FeaturedPlaylist } from '../../models';

@Component({
  selector: 'fp-playlists',
  template: `
    <mat-card>
      <ng-container *ngIf="!loading; else loadingRef">
        <h2>Featured Playlists</h2>
        <mat-list>
          <a *ngFor="let playlist of playlists" [href]="playlist.url">
            <mat-list-item>
              <img
                class="artwork"
                width="50px"
                [src]="playlist.artwork"
                alt="artwork"
              />
              <div mat-line>{{ playlist.name }}</div>
              <div mat-line>{{ playlist.curator_name }}</div>
            </mat-list-item>
          </a>
        </mat-list>
      </ng-container>
      <ng-template #loadingRef
        ><mat-spinner diameter="50"></mat-spinner
      ></ng-template>
    </mat-card>
  `,
  styles: [
    `
      img {
        margin-left: 10px;
      }

      h2 {
        text-align: center;
      }

      a {
        text-decoration: none;
      }

      a:hover > mat-list-item {
        background: #e3e3e3;
      }

      mat-spinner {
        margin: 0 auto;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaylistsComponent {
  @Input() playlists: FeaturedPlaylist[] = [];
  @Input() loading = false;
}
