import { ActivatedRoute, Data } from '@angular/router'
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

    public errorMessage: string

    constructor(private route: ActivatedRoute) {
        
    }

    ngOnInit(): void {
        // this.errorMessage = this.route.snapshot.data['message'] || 'Message not Found!'
        this.route.data
            .subscribe(
                (data: Data) => {
                    this.errorMessage = data.message
                }
            )
    }

}
