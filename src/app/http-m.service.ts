import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class HttpMService {
  constructor(private http: HttpClient) { }
  get(id: any){
    return this.http.get(`https://www.omdbapi.com/?i=${id}&apikey=Key`);
  }
}
