import { capitalize } from './../utilities'
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-invalid-page',
    templateUrl: './invalid-page.component.html',
    styleUrls: ['./invalid-page.component.css']
})
export class InvalidPageComponent implements OnInit {

    public message: string = 'No Message'

    constructor(
        private route: ActivatedRoute
    ) {  }

    ngOnInit(): void {
        this.constructMessage()
    }

    private constructMessage(): void {
        const params: Params = this.route.snapshot.queryParams
        const entries: [string, any][] = Object.entries(params)
        
        this.message = `${capitalize(entries[0][1])} with ${entries[1][0]} - ${entries[1][1]} is not valid.`
    }
}
