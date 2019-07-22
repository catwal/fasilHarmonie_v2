import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-info',
  templateUrl: './key-info.page.html',
  styleUrls: ['./key-info.page.scss'],
})
export class KeyInfoPage implements OnInit {

  public index = [
    'DO',
    'DO#',
    'RE',
    'RE#',
    'MI',
    'FA',
    'FA#',
    'SOL',
    'SOL#',
    'LA',
    'LA#',
    'SI'
  ];
  constructor() { }

  ngOnInit() {
  }

}
