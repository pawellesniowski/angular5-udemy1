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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  } // end of constructor()

  ngOnInit() {
  } // end of ngOnInit()

  onCreateServer() {
    this.serverCreationStatus = `Server ${this.serverName} was created!`;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  // onResetUser() {
  //   this.username = '';
  // }

}
