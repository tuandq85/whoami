import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-golean-editor',
  templateUrl: './golean-editor.component.html',
  styleUrls: ['./golean-editor.component.scss']
})
export class GoleanEditorComponent implements OnInit {

  public Editor = ClassicEditor;
  
  constructor() { }

  ngOnInit() {
  }

}
