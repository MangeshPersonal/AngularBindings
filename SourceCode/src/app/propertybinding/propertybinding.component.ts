import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit 
{

  title:string="Hello from component."
 
  imagepath='https://s-media-cache-ak0.pinimg.com/originals/07/e0/17/07e017c17b521a05f1a43f88f1da9d51.jpg';

  status:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
