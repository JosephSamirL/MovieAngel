import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
  } from '@angular/animations';
  export const toggleFade = trigger('fade',[
      transition(':enter',[
          style({opacity: 0, transform:"translateY(50px)"}),
          animate('500ms',style({opacity: 1, transform:"translateY(0px)"}))
      ])

])