import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharService {

  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, name? : string) {
 
    let params = new HttpParams();
    params = params.append('page', page);

    if(name) {
      params = params.append('name', name);
    }

    let data = this.http.get(this.url, { params });
    return data;
  }

  getCharacter(id: string | null) {
    let data = this.http.get(this.url + "/" + id);
    return data;
  }

}
