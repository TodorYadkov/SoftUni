import { Injectable } from '@angular/core';
import { HOST_URL } from '../environments/constants';
import { endpoint } from '../environments/endpoints';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlbum } from 'src/app/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAllAlbums(): Observable<IAlbum[]> {
    const url = HOST_URL + endpoint.getAllAlbums;
    return this.http.get<IAlbum[]>(url);
  }

  createAlbum(newAlbum: IAlbum): Observable<IAlbum> {
    const url = HOST_URL + endpoint.createAlbum;
    return this.http.post<IAlbum>(url, newAlbum);
  }

  getAlbumById(albumId: string): Observable<IAlbum> {
    const url = HOST_URL + endpoint.albumDetails(albumId);
    return this.http.get<IAlbum>(url);
  }

  getLikesCountByALbumId(albumId: string): Observable<number> {
    const url = HOST_URL + endpoint.getAllLikesCount(albumId);
    return this.http.get<number>(url);
  }

  getLikeForUser(albumId: string, userId: string): Observable<number> {
    const url = HOST_URL + endpoint.getLikeForUser(albumId, userId);
    return this.http.get<number>(url);
  }

  addNewLike(body: { albumId: string }): Observable<any> {
    const url = HOST_URL + endpoint.addlike;
    return this.http.post(url, body);
  }

  deleteAlbum(albumId: string): Observable<any> {
    const url = HOST_URL + endpoint.deleteAlbum(albumId);
    return this.http.delete(url);
  }

  updateAlbum(albumId: string, album: IAlbum): Observable<IAlbum> {
    const url = HOST_URL + endpoint.updateAlbum(albumId);
    return this.http.put<IAlbum>(url, album);
  }
}
