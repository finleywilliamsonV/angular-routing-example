import { ActivatedRoute, Params, Router } from '@angular/router'
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
        private route: ActivatedRoute,
        private router: Router
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

    public onEdit() {
        this.router.navigate(['edit'], {
            relativeTo: this.route,
            queryParamsHandling: 'preserve'
        })
    }

    public onNextServer() {
        const newServerId: number = (this.server.id % 3) + 1
        this.router.navigate(['/servers', newServerId], {
            queryParams: {
                allowEdit: newServerId === 3 ? '1' : '0'
            },
            preserveFragment: true
        })
    }
}
