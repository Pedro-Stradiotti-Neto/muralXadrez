import { Component, OnInit } from '@angular/core';
import { faChessPawn, faChessRook, faChessKnight, faChessBishop, faChessQueen, faChessKing } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faChessPawn = faChessPawn;
  faChessRook = faChessRook;
  faChessKnight = faChessKnight;
  faChessBishop = faChessBishop;
  faChessQueen = faChessQueen;
  faChessKing = faChessKing;

  constructor() { }

  ngOnInit(): void {
  }

}