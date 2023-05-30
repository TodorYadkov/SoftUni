import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {
  errorMsgFromServer: string = '';
  subscribe$!: Subscription;
  albumDetails!: IAlbum;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.subscribe$ = this.route.params
      .subscribe({
        next: (params) => {
          const albumId = params['id'];
          this.dataService
            .getAlbumById(albumId).subscribe(data => this.albumDetails = data);
        },
        error: (error) => this.errorMsgFromServer = error.error.message,
        complete: () => this.subscribe$.unsubscribe()
      });
  }

  onSubmit(formData: NgForm) {
    const userInput: IAlbum = formData.value;
    this.subscribe$ = this.route.params.subscribe(params => {
      const albumId = params['id'];
      this.dataService.updateAlbum(albumId, userInput).subscribe({
        error: (error) => this.errorMsgFromServer = error.error.message,
        complete: () => {
          formData.reset();
          this.subscribe$.unsubscribe();
          this.router.navigate(['details', albumId]);
        }
      });
    });
  }

  ngOnDestroy(): void {
    this.subscribe$.unsubscribe();
  }

}