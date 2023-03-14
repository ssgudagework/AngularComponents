import { Component } from "@angular/core";

@Component({
    selector:'app-final',
    template: 
    `<h2>Last component directly</h2>
    <p>lorem5 its a hduovilnlkjgoueqlaljv</p>`,
    styles:[`
        h2{
            color:blue;
        }
        p{
            color:grey;
            font-size: 20px;
            border: 2px dotted red;
            width:300px
        }
    `]
})


export class FinalComponent{

}