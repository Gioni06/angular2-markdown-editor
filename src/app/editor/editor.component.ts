import { Component, OnInit } from '@angular/core';
import * as showdown from 'showdown';

@Component({
  moduleId: module.id,
  selector: 'app-editor',
  templateUrl: 'editor.component.html',
  styleUrls: ['editor.component.css']
})
export class EditorComponent implements OnInit {
  public markdown:string;
  public preview:string;
  private converter:showdown.Converter;
  constructor() {
    this.converter = new showdown.Converter();
    this.markdown = '#Building a markdown editor with Angular 2, Angular Material 2 and angular-cli\n\nJust type some markdown and see the output.';
  }
  ngOnInit() {
        this.preview = this.converter.makeHtml(this.markdown);
  }

  convert(value) {
    this.preview = this.converter.makeHtml(value);
    console.log(this.preview);
  }

}
