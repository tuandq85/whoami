import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  questionType = null;
  editorValue = null;
  imageSettings: Object = null;

  constructor(private http: HttpClient) {
    let imgPath = "/demoURL/folder";

    this.imageSettings = {
      // saveUrl: this.uploadSettings,
      saveUrl: 'http://localhost:8080/upload/saveFile',
      // removeUrl: this.removeSettings,
      path: imgPath,
      display: 'inline'
    };
  }

  ngOnInit() {
  }

  onSubmit() {
  }
}
