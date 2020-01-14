import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodpostalService {

  constructor(private http: HttpClient) {
  }

  //baseURL:string = "https://demo3654022.mockable.io/datos";
  getCpInfo(url: string){
    return this.http.get(url);
  }

}
