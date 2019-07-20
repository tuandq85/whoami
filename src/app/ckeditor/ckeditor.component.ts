import {Component} from '@angular/core';

@Component({
    selector:"box-ckeditor",
    templateUrl:"./ckeditor.component.html",
    styleUrls:['./ckeditor.component.css']
})

export class CkeditorComponent{
   
    public editorValue: string = '';
    constructor(){

    }
  
    onSubmit(){
        console.log(this.editorValue);
    }
}