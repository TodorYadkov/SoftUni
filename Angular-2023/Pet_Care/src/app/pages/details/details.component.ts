import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPets } from 'src/app/models/interfaces';
import { DataService } from 'src/app/shared/services/data/data.service';
import { UserManagementService } from 'src/app/shared/services/userManage/user-management.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  isLoggedIn!: boolean;
  isOwner!: false | boolean;
  isDonate!: boolean;
  petDetails!: IPets;
  entireDonation: number = 0;

  constructor(
    private manageUser: UserManagementService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.manageUser.getUserStatus();

    let petId: string = '';
    this.route.params.subscribe(params => petId = params['petId']);
    this.dataService.getPetById(petId).subscribe({
      next: (data) => {
        this.petDetails = data;
        if (this.isLoggedIn) {
          const userId: string = this.manageUser.getUserStatus()!._id;
          this.isOwner = userId == data._ownerId;

          this.dataService.getDonationFromUser(petId, userId).subscribe(countDonation => {
            this.isDonate = countDonation == 0 ? false : true;
          });
        }

        this.dataService.getEntrireDonationFromPet(petId).subscribe(numDonation => this.entireDonation = Number(numDonation) * 100);
      },
      error: (error) => console.error(error),
    })
  }

  deletePet(petId: string) {
    this.dataService.deletePet(petId).subscribe({
      next: (data) => this.router.navigate(['catalog']),
      error: (error) => console.error(error)
    });
  }

  donation(petId: string) {
    const userId: string = this.manageUser.getUserStatus()!._id;
    this.dataService.makeDonation({ petId }).subscribe({
      next: (data) => {
        this.dataService.getDonationFromUser(petId, userId).subscribe(countDonation => {
          this.isDonate = countDonation == 0 ? false : true;
          this.dataService.getEntrireDonationFromPet(petId).subscribe(numDonation => this.entireDonation = Number(numDonation) * 100);
        });
      },
      error: (error) => console.error(error),
    });
  }



}
