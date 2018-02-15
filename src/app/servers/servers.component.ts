import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  username = '';
  serverCreated = false;
  serversArray = ['Rambo-2093', 'Rocky-R200', 'T-1000'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  } // end of constructor()

  ngOnInit() {
  } // end of ngOnInit()

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
    this.serverCreated = true;
    this.serversArray.push(this.serverName);
    // setTimeout(() => {
    //   this.serverCreated = false;
    //   this.serverName = '';
    // }, 1000);
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

}
