import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
  isOwner: boolean = false;
  isLogged: boolean = false;
  albumDetails!: IAlbum;
  countLikes!: number;
  hasLike!: boolean;
  paramsSubscribe$!: Subscription;

  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let albumId: string;
    this.paramsSubscribe$ = this.route.params.subscribe((params) => {
      albumId = params['id'];
      this.dataService.getAlbumById(albumId).subscribe({
        next: (data) => {
          this.albumDetails = data;
          const userInfo = this.authService.getUserInfo();
          if (userInfo) {
            this.isLogged = true;
            this.isOwner = this.albumDetails._ownerId == userInfo._id;
            this.dataService
              .getLikeForUser(this.albumDetails._id, userInfo._id)
              .subscribe((countLike: number) => this.hasLike = countLike == 0);
          }

          this.dataService
            .getLikesCountByALbumId(this.albumDetails._id)
            .subscribe((likesCount: number) => this.countLikes = likesCount);
        },
        error: (error) => console.error(error),
        complete: () => this.paramsSubscribe$.unsubscribe()
      });
    });
  }

  addLike(albumId: string) {
    let subscribe$: Subscription;
    subscribe$ = this.dataService
      .addNewLike({ albumId })
      .subscribe({
        next: (data) => {
          this.hasLike = false;
          this.countLikes += 1;
        },
        error: (error) => console.error(error),
        complete: () => subscribe$.unsubscribe(),
      });
  }

  deleteAlbum(albumId: string) {
    const confirmation = confirm('Do you want to delete this album?');
    if (confirmation) {
      let subscribe$: Subscription;
      subscribe$ = this.dataService
        .deleteAlbum(albumId)
        .subscribe({
          error: (error) => console.error(error),
          complete: () => {
            this.router.navigate(['catalog']);
            subscribe$.unsubscribe();
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscribe$.unsubscribe();
  }
}
