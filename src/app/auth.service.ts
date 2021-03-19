export class AuthService {
    public loggedIn: boolean = false

    public isAuthenticated(): Promise<boolean> {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 800)
            }
        )
    }

    public login() {
        this.loggedIn = true
    }

    public logout() {
        this.loggedIn = false
    }
}