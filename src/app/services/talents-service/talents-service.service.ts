import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiResult } from 'src/app/model/api-result.model';
import { Talent } from 'src/app/model/talent.model';

@Injectable({
  providedIn: 'root'
})
export class TalentsServiceService {

  private baseURL = 'https://randomuser.me/api/?seed=testing&noinfo&inc=gender,name,phone,picture,email,nat,id';
  constructor(private http: HttpClient) { }

  public getNineUsers(): Observable<Talent[]>{
    const reqURL: string = `${this.baseURL}&results=9`;
    return this.http.get<ApiResult<Talent>>(reqURL).pipe(map((result)=> result.results));
  }

  public getUser(index: number): Observable<Talent> {
    const requestUrl = `${this.baseURL}&results=9`;
    return this.http.get<ApiResult<Talent>>(requestUrl).pipe(
        map((result) => result.results[index]));
  }
}


