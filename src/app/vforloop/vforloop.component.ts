import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vforloop',
  templateUrl: './vforloop.component.html',
  styleUrls: ['./vforloop.component.css']
})

export class VforloopComponent implements OnInit {
  serverName:string = "Test";
  servers=['Test', 'Live', 'Special']

  constructor() { }

  ngOnInit(): void {
  }

  onCreateerver(){
    this.servers.push(this.serverName);
    this.serverName = "";
  }
}
