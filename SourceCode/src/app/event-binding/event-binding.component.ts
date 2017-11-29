import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {


  logevent(event)
  {
   alert("Say Hi");
  }

  SendData(Username:string,password:string,emailID:string):void
  {
    
alert("user name " + Username);
alert("password " + password);
alert("email " + emailID);

  }

  constructor() { }

  ngOnInit() {
  }

}
