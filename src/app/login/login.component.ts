import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginInput = '';
    userLoggedIn = false;
    userName = '';

    onLogin() {
        this.userName = this.loginInput;
        this.userLoggedIn = true;
        console.log('User name: ', this.userName);
    }

    onLogout() {
        this.loginInput = '';
        this.userLoggedIn = false;
        this.userName = '';
        console.log('you have logged out!');
    }
}
