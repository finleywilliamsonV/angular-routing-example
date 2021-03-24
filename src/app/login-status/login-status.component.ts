import { AuthService } from './../auth.service'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-login-status',
    templateUrl: './login-status.component.html',
    styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

    public loggedIn: boolean = false
    constructor(private authService: AuthService) {
        this.authService.loggedInStatusChanged
            .subscribe(
                (loggedInStatus: boolean) => {
                    this.loggedIn = loggedInStatus
                }
            )
    }

    ngOnInit(): void {
        this.loggedIn = this.authService.loggedIn
    }

}
