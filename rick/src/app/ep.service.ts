import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EpService {

  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {}


  getEpisodes(page: number, name? : string) {
 
    let params = new HttpParams();
    params = params.append('page', page);
    let data = this.http.get(this.url, { params });
    return data;
  }

  getEpisode(id: string | null) {
    let data = this.http.get(this.url + "/" + id);
    return data;
  }

  getEpisodeByUrl(url: string) {
    let data = this.http.get(url);
    return data;
  }

  // getEpisodeById(id: number) {}
}
