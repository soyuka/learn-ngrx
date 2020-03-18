import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get('https://api.thecatapi.com/v1/images/search?limit=10');
  }

  searchBreeds(term: string) {
    return this.http.get(`https://api.thecatapi.com/v1/breeds/search?q=${term}`);
  }
}
