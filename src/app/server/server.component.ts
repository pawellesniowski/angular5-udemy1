import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    id = 123;
    serverStatus = '';
    displayServerDetails = false;
    serverDetails = 'Secret password is Tuna';
    clicksArray = [];
    num = 0;

    constructor() {
        this.id = Math.floor(Math.random() * 100);
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    onDisplayServerDetails() {
        // this.displayServerDetails === true ? this.displayServerDetails = false : this.displayServerDetails = true;
        this.displayServerDetails = !this.displayServerDetails;
        this.clicksArray.push(this.clicksArray.length + 1);
    }

}
