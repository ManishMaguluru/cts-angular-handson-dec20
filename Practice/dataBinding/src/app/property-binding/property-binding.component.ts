import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent{

  isDisabled : boolean = true;
  isHidden : boolean = false;

  handleOnClick(){
    this.isDisabled = !this.isDisabled;
    this.isHidden = !this.isHidden;
  }


}
