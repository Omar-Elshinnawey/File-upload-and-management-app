import { Injectable } from '@angular/core';
import {MdSnackBar} from '@angular/material';

@Injectable()
export class SnackBarService {
    
    constructor(public snackbar: MdSnackBar) { }

    open(text: string, duration?: number){
        this.snackbar.open(text,'', {
            duration: duration || 4000
        });
    }
}