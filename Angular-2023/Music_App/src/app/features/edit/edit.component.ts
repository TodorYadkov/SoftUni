import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  errorMsgFromServer!: string;
  albumDetails!: IAlbum;
  subscription$!: Subscription;
  albumId!: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscription$ = this.route.params.subscribe((params) => {
      this.albumId = params['albumId'];
      this.dataService.getAlbumById(this.albumId).subscribe({
        next: (data) => this.albumDetails = data,
        error: (error) => this.errorMsgFromServer = error.error.message,
        complete: () => this.subscription$.unsubscribe(),
      });
    })
  }

  onSubmit(formData: NgForm) {

    this.subscription$ = this.dataService.editAlbumById(this.albumId, formData.value).subscribe({
      error: (err) => this.errorMsgFromServer = err.error.message,
      complete: () => {
        this.subscription$.unsubscribe();
        this.router.navigate(['details', `${this.albumId}`]);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
