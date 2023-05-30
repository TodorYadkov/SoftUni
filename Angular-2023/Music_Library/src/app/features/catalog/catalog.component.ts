import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  albums: IAlbum[] = [];
  subscribe$!: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscribe$ = this.dataService.getAllAlbums().subscribe({
      next: (data) => this.albums = data,
      error: (error) => console.error(error),
      complete: () => this.subscribe$.unsubscribe()
    });
  }
}