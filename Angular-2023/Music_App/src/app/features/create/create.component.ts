import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  errorMsgFromServer!: string;
  subscription$!: Subscription;

  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  onSubmit(formData: NgForm) {

    this.subscription$ = this.dataService.createNewAlbum(formData.value).subscribe({
      error: (err) => this.errorMsgFromServer = err.error.message,
      complete: () => {
        this.subscription$.unsubscribe();
        this.router.navigate(['catalog']);
      }
    });
    
  }
}
