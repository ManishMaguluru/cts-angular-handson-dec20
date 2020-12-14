import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  templateUrl: './child-counter.component.html',
  styleUrls: ['./child-counter.component.css']
})
export class ChildCounterComponent  {

  @Input()
  username : String = undefined;

  likes : number = 1;
  dislikes : number = 1;

  @Output()
  likesCount : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  dislikesCount : EventEmitter<number> = new EventEmitter<number>();

  likeOnClick(){
    this.likesCount.emit(this.likes++);
  }

  dislikeOnClick()
  {
    this.dislikesCount.emit(this.dislikes++);
  }

  clearOnClick(){
    this.likesCount.emit(this.likes =0);
    this.dislikesCount.emit(this.dislikes = 0);
  }

}
