import { Component } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { EditorComponent  } from './editor';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    EditorComponent,
    MdIcon,MD_SIDENAV_DIRECTIVES,
    MdToolbar,
    MD_BUTTON_DIRECTIVES
    ],
  providers: [MdIconRegistry]
})
export class AppComponent {
  title = 'app works!';
  constructor() {
  }
}
