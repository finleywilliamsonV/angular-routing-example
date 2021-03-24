import { EventEmitter } from '@angular/core'

export class AuthService {
    public loggedIn: boolean = true
    public loggedInStatusChanged: EventEmitter<boolean>

    constructor() {
        this.loggedInStatusChanged = new EventEmitter<boolean>()
    }

    public isAuthenticated(): Promise<boolean> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 250)
            }
        )
    }

    public logIn() {
        this.loggedIn = true
        this.loggedInStatusChanged.emit(true)
    }

    public logOut() {
        this.loggedIn = false
        this.loggedInStatusChanged.emit(false)
    }
}