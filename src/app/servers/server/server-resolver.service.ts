import { ServersService } from './../servers.service'
import { AsyncOptional } from './../../app.model'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Server } from '../servers.model'
import { Injectable } from '@angular/core'

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serversService: ServersService) {  }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): AsyncOptional<Server> {
        return this.serversService.getServer(+route.params.id)
    }
    
}