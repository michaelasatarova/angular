import { Component } from "@angular/core";
import { ChildActivationStart } from "@angular/router";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';
  allowNewServer: boolean = false;
  serverCreationStatus:string = "no server created";
  serverName:string ='';

  constructor(){
      setTimeout(() =>{
        this.allowNewServer = true;
      },2000)
  }

  onCreateServer(){
      this.serverCreationStatus = "Serwer creted"
  }
  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}