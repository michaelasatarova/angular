import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component implements OnInit {
  displayParagraph:boolean =true;
  arrBtns = [true, false]

  constructor() { }

  ngOnInit(): void {
  }
  togglebtn(){
    this.displayParagraph = !this.displayParagraph;
    this.arrBtns.push(this.displayParagraph);
  }
}
