import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

    @Input() role: string;
    @Input() title: string;

  constructor() {  }
}
