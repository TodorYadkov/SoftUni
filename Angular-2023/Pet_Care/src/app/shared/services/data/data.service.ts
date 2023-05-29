import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST_URL } from '../../environments/constant';
import { endpoints } from '../../environments/endPoints';
import { Observable } from 'rxjs';
import { IPets } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllPets(): Observable<IPets[]> {
    const url = HOST_URL + endpoints.getAllPets;
    return this.http.get<IPets[]>(url);
  }

  createPet(newPet: IPets): Observable<IPets> {
    const url = HOST_URL + endpoints.createPet;
    return this.http.post<IPets>(url, newPet);
  }

  getPetById(petId: string): Observable<IPets> {
    const url = HOST_URL + endpoints.getById(petId);
    return this.http.get<IPets>(url);
  }

  getDonationFromUser(petId: string, userId: string): Observable<number> {
    const url = HOST_URL + endpoints.getDonationFromUser(petId, userId);
    return this.http.get<number>(url);
  }

  getEntrireDonationFromPet(petId: string): Observable<number> {
    const url = HOST_URL + endpoints.getDonationCountFromPet(petId);
    return this.http.get<number>(url);
  }

  deletePet(petId: string): Observable<any> {
    const url = HOST_URL + endpoints.deletePet(petId);
    return this.http.delete(url);
  }

  updatePet(petId: string, data: IPets): Observable<any> {
    const url = HOST_URL + endpoints.updatePet(petId);
    return this.http.put(url, data);
  }

  makeDonation(petData: { petId: string }): Observable<any> {
    const url = HOST_URL + endpoints.makeDonation;
    return this.http.post(url, petData);
  }

}