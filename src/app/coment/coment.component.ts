import { Component, OnInit } from '@angular/core';
import { faChessPawn, faChessRook, faChessBishop, faChessQueen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {

  faChessPawn = faChessPawn;
  faChessRook = faChessRook;
  faChessBishop = faChessBishop;
  faChessQueen = faChessQueen;

  constructor() { }

  ngOnInit(): void {
  }

}