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
  errorMsgFromServer!: string;
  subsciption$!: Subscription;
  albumDetails!: IAlbum;
  isOwner: boolean = false;

  constructor(
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let albumId: string;
    this.subsciption$ = this.route.params
      .subscribe({
        next: (params) => {
          albumId = params['albumId'];
          this.dataService.getAlbumById(albumId)
            .subscribe({
              next: (data) => this.albumDetails = data,
              error: (error) => this.errorMsgFromServer = error.error.message,
              complete: () => {
                this.isOwner = this.albumDetails._ownerId == this.authService.getUserToken()?._id;
                this.subsciption$.unsubscribe();
              }
            });
        }
      });

  }

  deleteAlbum(albumId: string) {
    const confirmation = confirm(`Are you sure to delete ${this.albumDetails.name}`);
    if (confirmation) {
      this.subsciption$ = this.dataService.deleteAlbumById(albumId).subscribe({
        error: (error) => this.errorMsgFromServer = error.error.message,
        complete: () => {
          this.subsciption$.unsubscribe();
          this.router.navigate(['catalog']);
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subsciption$.unsubscribe();
  }

}
