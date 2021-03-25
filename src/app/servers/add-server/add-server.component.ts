import { ServersService } from './../servers.service'
import { DEFAULT_SERVER } from './../servers.model'
import { Component, OnInit } from '@angular/core'
import { Server } from '../servers.model'
import { Router } from '@angular/router'

@Component({
    selector: 'app-add-server',
    templateUrl: './add-server.component.html',
    styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit {

    public newServer: Server

    constructor(
        private serversService: ServersService,
        private router: Router
    ) {  }

    ngOnInit(): void {

        this.newServer = DEFAULT_SERVER
    }

    public onConfirmAddServer(): void {
        this.serversService.addServer(this.newServer)
        this.router.navigate(['servers'])
    }

    public onCancel(): void {

    }

    public get formValid(): boolean {
        return this.newServer.name.replace(' ', '') !== ''
    }

}
