import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { IAlbum } from 'src/app/models/interfaces';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  errorMsgFromServer: string = '';
  subscribe$!: Subscription;
  
  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  onSubmit(formData: NgForm) {
    const userInput: IAlbum = formData.value;
    this.subscribe$ = this.dataService.createAlbum(userInput).subscribe({
      error: (error) => this.errorMsgFromServer = error.error.message,
      complete: () => {
        formData.reset();
        this.subscribe$.unsubscribe();
        this.router.navigate(['catalog']);
      }
    });
  }
} 
