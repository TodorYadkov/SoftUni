import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  albumsFound!: IAlbum[];
  query: string = '';
  subscription$!: Subscription;
  errorMsgFromServer!: string;
  hasResult: boolean = false;

  constructor(
    private dataService: DataService,
  ) { }

  onSearch(searchStr: string) {
    this.query = searchStr;
    this.subscription$ = this.dataService.search(this.query).subscribe({
      next: (data) => {
        this.albumsFound = data;
        this.hasResult = this.albumsFound.length != 0;
      },
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => this.subscription$.unsubscribe(),
    })
  }
}
