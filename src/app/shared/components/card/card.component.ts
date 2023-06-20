import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() item:any
  @Output () getDate = new EventEmitter();
  amount = 1;
  addcard:boolean = true;

  getdate(){
    this.getDate.emit({data:this.item,quantity:this.amount})
  }
}
