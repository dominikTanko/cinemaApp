import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) { }

  getData(api_key: string, query: string) {
    return this.http.get(
        'https://api.themoviedb.org/3/search/movie?api_key=' + api_key + '&query=' + query,
        {observe: "body", responseType: "json"}
      );
  }
}
