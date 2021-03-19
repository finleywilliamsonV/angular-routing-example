export class AuthService {
    public loggedIn: boolean = false

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
    }

    public logOut() {
        this.loggedIn = false
    }
}