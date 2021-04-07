import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css'],
})
export class NgstyleComponent implements OnInit {
  @Input() color = 'lightblue';
  font = 'arial';
  bgc = 'gold';
  constructor() {}

  ngOnInit(): void {}
}
