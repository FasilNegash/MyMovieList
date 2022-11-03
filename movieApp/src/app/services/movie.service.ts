import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
@Injectable({
  providedIn: 'root'
})


export class MovieService {

  constructor(private http: HttpClient) { }


  public getTopRatesMovies(page: number): Observable<ApiResult> {
    return this.http.get <ApiResult>(`${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }

  public getMoivieDetail(id: string): Observable<ApiResult> {
    return this.http.get <ApiResult>(`${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

}
