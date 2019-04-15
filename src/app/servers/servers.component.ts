import { Component, OnInit } from '@angular/core';

/*
  <app-servers></app-servers>
  <div app-servers></div>
  <div class="app-servers"></div>
*/


@Component({
  // selector: 'app-servers', //select by element
  // selector: '[app-servers]', //select by attribute
  selector: '.app-servers', //select by class
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server>
  //            <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Default Server';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  //event name
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created name is '${this.serverName}'`;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
    console.log(this.serverName);
  }


}
