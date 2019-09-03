import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  questionType = null;
  editorValue = null;

  uploadSettings = {
    type: 'post',
    url: 'http://localhost:8080/upload/saveFile'
  };
  removeSettings = {
    type: 'post',
    url: 'http://localhost:8080/upload/removeFile'
  };

  imgPath: string = null;
  public imageSettings: Object = {
    // saveUrl: this.uploadSettings,
    saveUrl: 'http://localhost:8080/upload/saveFile',
    // removeUrl: this.removeSettings,
    path: this.imgPath,
    display: 'inline'
  };



  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Question type: ', this.questionType);
    console.log('Editor value:', this.editorValue);

    // get blob.
    var indexOfString = this.editorValue.substring(this.editorValue.indexOf("blob:http"));
    indexOfString = indexOfString.substring(0, indexOfString.indexOf("\""));
    console.log(indexOfString.substring("blod:".length));

    var blob = new Blob([indexOfString]);
    let reader = new FileReader;

 reader.readAsDataURL(blob); // read file as data url
 reader.onload = () => { // when file has loaded
    console.log(reader.result)
    var img:any = new Image();
    img.src = reader.result;

    img.onload = () => {
      console.log("image width: ", img.width); //to get image width
      console.log("image height: ", img.height);  //to get image height
      console.log("Upload url: ", reader.result); //to get blob image
      console.log(reader.result)          
    };          
  } 

  }

  // public onToolbarClick(e: any): void {
  //   if (e.item != null && e.item.id == "imageRTE_toolbar_Image") { // Checked if image toolbar is clicked 
  //     let element: any = document.getElementById('imageRTE_upload') // Image uploader element 
  //     element.ej2_instances[0].uploading = function upload(args) { // Added updating event on image uploader 
  //       console.log("Go in here");
  //       console.log("detail:", args);
  //     }
  //   }
  // }
}
