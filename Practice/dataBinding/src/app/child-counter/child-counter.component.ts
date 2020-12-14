import { Component, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent {

counter : number = 0;



@Output()
childCounter : EventEmitter<number> = new EventEmitter<number>();

@Output()
childUserDetails : EventEmitter<any> = new EventEmitter<any>();

handleOnClick()
{
  this.childCounter.emit(this.counter++);
  this.childUserDetails.emit({"firstName" : "Virat","Age" : 29})
}

}
