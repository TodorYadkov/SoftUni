import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/interfaces';
import { CONSTANTS } from '../environments/constants';
import { endpoints } from '../environments/endpoint';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllAlbums(): Observable<IAlbum[]> {
    const url = CONSTANTS.host_url + endpoints.catalog;
    return this.http.get<IAlbum[]>(url);
  }

  createNewAlbum(data: IAlbum): Observable<IAlbum> {
    const url = CONSTANTS.host_url + endpoints.create;
    return this.http.post<IAlbum>(url, data);
  }

  getAlbumById(albumId: string): Observable<IAlbum> {
    const url = CONSTANTS.host_url + endpoints.details(albumId);
    return this.http.get<IAlbum>(url);
  }

  editAlbumById(albumId: string, data: IAlbum): Observable<IAlbum> {
    const url = CONSTANTS.host_url + endpoints.edit(albumId);
    return this.http.put<IAlbum>(url, data);
  }

  deleteAlbumById(albumId: string): Observable<any> {
    const url = CONSTANTS.host_url + endpoints.delete(albumId);
    return this.http.delete(url);
  }

  search(query: string): Observable<IAlbum[]> {
    const url = CONSTANTS.host_url + endpoints.search(query);
    return this.http.get<IAlbum[]>(url);
  }
}
