import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { ServersService } from '../servers.service'

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
    public server: { id: number, name: string, status: string }
    public serverName = '';
    public serverStatus = '';
    public allowEdit: boolean = false

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute
    ) {}

    public ngOnInit() {

        /**
         * this.route.snapshot.queryParams
         * this.route.snapshot.queryParams
         * this.route.queryParams.subscribe()
         * this.route.fragment.subscribe()
         */
        this.server = this.serversService.getServer(1)
        this.serverName = this.server.name
        this.serverStatus = this.server.status
        this.route.queryParams
            .subscribe(
                (params: Params) => {
                    this.allowEdit = !!+params.allowEdit
                }
            )
    }

    public onUpdateServer() {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus })
    }

}
