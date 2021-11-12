import { Component, Directive, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
  styles:[`
    .online{
      display:none;
    }
  `]
})
export class Assignment1Component implements OnInit {
  changeIntput:string = "";
  serverStatus:string = "online";
  constructor() { }

  ngOnInit(): void {
  }
  clenUp(){
    this.changeIntput ="";
  }

  getColor(){
    console.log(this.serverStatus)
    return this.serverStatus === "online" ? 'green': 'red';

  }
}

