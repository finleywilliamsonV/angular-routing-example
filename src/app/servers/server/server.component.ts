import { ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { ServersService } from '../servers.service'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
    public server: { id: number, name: string, status: string }

    constructor(
        private serversService: ServersService,
        private route: ActivatedRoute
    ) {  }

    ngOnInit() {
        this.server = this.serversService.getServer(+this.route.snapshot.params.id)
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.server = this.serversService.getServer(+params.id)
                }
            )
    }
}
