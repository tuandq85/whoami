import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  questionType = null;
  editorValue = null;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Question type: ', this.questionType);
    console.log('Editor value:', this.editorValue);
  }
}
