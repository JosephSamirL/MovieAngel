import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
 search(inp : string, page:number){
    return this.http.get(`https://www.omdbapi.com/?s=${inp}&apikey=f6f28027&page=${page}`)
 }
}
