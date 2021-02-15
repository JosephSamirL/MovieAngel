import { Component, OnInit } from '@angular/core';
import { toggleFade } from './animations/toggle-fade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [toggleFade]
  
})
export class AppComponent implements OnInit{
  title = 'a';

  ngOnInit(): void {
   
  }
 
  



}
