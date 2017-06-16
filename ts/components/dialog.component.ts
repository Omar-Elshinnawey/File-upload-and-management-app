import { Component } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'my-dialog',
    templateUrl: 'views/dialog.component.html'
})
export class DialogComponent{

    constructor(public dialogRef: MdDialogRef<DialogComponent>) { }

}