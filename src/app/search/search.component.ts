import { Component, OnInit } from '@angular/core';
import { toggleFade } from '../animations/toggle-fade';
import {HttpService} from "../http.service"
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations:[toggleFade]
})
export class SearchComponent implements OnInit {
  search: string ="";
  page: number = 1;
  res: any;
  temp: any;
  constructor(private http: HttpService){}
  next(){
    this.page+=1;
  }
  getNext(){
    this.next();
    this.http.search(this.search, this.page).subscribe(item=>{
      this.temp = item ;
      for(let i = 0; i < this.temp.Search.length; i++){
        if(this.temp.Error){
          this.res.Error = this.temp.Error;
          break
        }
        this.res.Search.push(this.temp.Search[i])
      }
      console.log(this.res)
 })
  }
  
  get(){
    this.page = 1;
    this.http.search(this.search, this.page).subscribe(item=>{
         this.res = item;
         this.page = 1;
         console.log(this.res)
    })
  }
  
  
  ngOnInit(): void {
  }

}
