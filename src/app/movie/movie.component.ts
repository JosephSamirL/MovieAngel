import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpMService } from '../http-m.service';
import { toggleFade } from '../animations/toggle-fade';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  animations:[toggleFade]
})
export class MovieComponent implements OnInit {
id: any;
data: any;
  constructor(
    private httmM: HttpMService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.id = (this.route.snapshot.paramMap.get('id'));
    this.httmM.get(this.id).subscribe(item=>{
        this.data = item;
        console.log(this.data)
    })
  }

}
