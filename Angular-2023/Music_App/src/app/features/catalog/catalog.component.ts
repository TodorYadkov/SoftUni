import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  errorMsgFromServer!: string;
  allAlbums!: IAlbum[];
  subscribe$!: Subscription;
  isLoggedIn: boolean = false;

  constructor(
    private dataServcie: DataService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.userStatus;

    this.subscribe$ = this.dataServcie.getAllAlbums().subscribe({
      next: (data) => this.allAlbums = data,
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => this.subscribe$.unsubscribe()
    })
  }

  ngOnDestroy(): void {
    this.subscribe$.unsubscribe();
  }
}
