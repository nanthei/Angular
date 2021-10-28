import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpService {
  constructor(private http: HttpClient) {}

  getEpisodeByUrl(url: string) {
    let data = this.http.get(url);
    return data;
  }

  getEpisodeById(id: number) {}
}
