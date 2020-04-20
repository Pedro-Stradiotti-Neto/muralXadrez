import { Component, OnInit } from '@angular/core';
import { faChess, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faChess = faChess;
  faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
