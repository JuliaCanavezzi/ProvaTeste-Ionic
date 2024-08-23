import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from '../models/music';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http : HttpClient) { }

  getMusics():Observable<Music[]>{
    return this.http.get<Music[]>(`${environment.baseUrl}/music`);
  }

  getMusicById(id:number|string):Observable<Music>{
    return this.http.get<Music>(`${environment.baseUrl}/music/${id}`);
  }
}
