import { Server, ServerStatus } from './../servers.model'
import { Observable } from 'rxjs'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { ServersService } from '../servers.service'
import { CanComponentDeactivate } from './can-deactiveate-guard.service'

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
    public server: Server
    public serverName: string
    public serverStatus: ServerStatus

    public allowEdit: boolean
    public changesSaved: boolean

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.allowEdit = false
        this.changesSaved = false
    }

    public ngOnInit() {

        /**
         * this.route.snapshot.queryParams
         * this.route.snapshot.queryParams
         * this.route.queryParams.subscribe()
         * this.route.fragment.subscribe()
         */
        const id: number = +this.route.snapshot.params.id
        this.loadServer(id)
        this.serverName = this.server.name
        this.serverStatus = this.server.status
        this.route.queryParams
            .subscribe(
                (params: Params) => {
                    this.allowEdit = !!+params.allowEdit
                }
            )
        this.route.params
            .subscribe(
                (params: Params) => {
                     if (params.id != this.server.id) {
                         this.loadServer(id)
                     }
                }
            )
    }

    private loadServer(id: number): void {
        this.server = this.serversService.getServer(id)
    }

    public onUpdateServer() {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus })
        this.changesSaved = true
        this.router.navigate(['../'], {relativeTo: this.route})
    }

    public canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.allowEdit) {
            return true
        }

        if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
            return confirm('Do you want to discard the changes?')
        } else {
            return true
        }
    }
}
