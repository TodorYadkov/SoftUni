import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPets } from 'src/app/models/interfaces';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  create(formData: NgForm) {
    const userInput: IPets = formData.value;
    this.dataService
      .createPet(userInput)
      .subscribe({
        next: (data) => this.router.navigate(['catalog']),
        error: (error) => console.error(error),
      });
  }
}