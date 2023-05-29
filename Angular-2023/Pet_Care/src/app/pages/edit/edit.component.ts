import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPets } from 'src/app/models/interfaces';
import { DataService } from 'src/app/shared/services/data/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petDetails!: IPets;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let petId: string = '';
    this.route.params.subscribe(params => petId = params['petId']);
    this.dataService.getPetById(petId).subscribe({
      next: (data) => this.petDetails = data,
      error: (error) => console.error(error),
    });
  }

  editPet(formData: NgForm) {
    console.log(formData.value)
    let petId: string = '';
    this.route.params.subscribe(params => petId = params['petId']);
    const userInput: IPets = formData.value;
    this.dataService.updatePet(petId, userInput).subscribe({
      error: (error) => console.error(error),
      complete: () => this.router.navigate(['details', petId])
    });
  }
}
