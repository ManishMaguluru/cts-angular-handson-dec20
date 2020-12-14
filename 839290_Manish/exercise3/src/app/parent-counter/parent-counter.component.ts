import { Component} from '@angular/core';

@Component({
  selector: 'app-parent-counter',
  templateUrl: './parent-counter.component.html',
  styleUrls: ['./parent-counter.component.css']
})
export class ParentCounterComponent {

  name = "Manish"
  
  likes : number = undefined;
  dislikes : number =undefined;

}
