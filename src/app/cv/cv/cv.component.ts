import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = new Cv();
  constructor() {}

  ngOnInit(): void {}
  getSelectedCv(cv: Cv): void {
    this.selectedCv = cv;
  }
}
