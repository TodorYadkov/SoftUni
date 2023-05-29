import { Component, OnInit } from '@angular/core';
import { IPets } from 'src/app/models/interfaces';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  allPets: IPets[];
  constructor (private dataService: DataService) {
    this.allPets = [];
  }

  ngOnInit(): void {
    this.dataService
    .getAllPets()
    .subscribe({
      next: (data) => this.allPets = data,
      error: (error) => console.error(error),
    });
  }
}
