import { Component, OnInit } from '@angular/core';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  public editorValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.editorValue);
  }
}
