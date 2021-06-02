import { ServersService } from './servers/servers.service'
import { AsyncOptional } from './app.model'
import { AuthService } from './auth.service'
import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'
import { Server } from './servers/servers.model'

@Injectable()
export class ValidServerGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
        private serversService: ServersService
    ) {  }

    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): AsyncOptional<boolean> {

        console.log('state:', state)

        const id: number = +route.params.id
        const server: Server = this.serversService.getServer(id)

        console.log('server:', server)

        if (server) {
            return true
        }

        else {
            this.router.navigate(
                ['invalid'],
                {
                    queryParams: {
                        resource: 'server',
                        id: id
                    }
                }
            )
        }
    }
}