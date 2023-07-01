import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
@Input ('title') title:any= "";
@Input ()product:any;
@Output() getselecter = new EventEmitter;
@Output () getallcat = new EventEmitter
getdata(){
this.getselecter.emit()
}
senddate(e:any){
  console.log(e.target.value)
}

}
