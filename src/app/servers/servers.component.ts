import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  true2 = 'to jest true2';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log('this form setTimeout form constructor', this);
    }, 2000);
  } // end of constructor()

  ngOnInit() {
  } // end of ngOnInit()

}
