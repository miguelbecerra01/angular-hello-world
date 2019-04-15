import { Component } from '@angular/core';

//add metadata for the class to tell angular what to do with the class
@Component({
    selector: 'app-server',  //must be a unique name
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color:white
    }
    `]
})
export class ServerComponent {
    serverId = Math.floor(Math.random() * (10 + 1) + 1);
    serverStatus = 'online';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}