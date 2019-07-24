import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions, PickerButton } from '@ionic/core';

@Component({
  selector: 'app-key-info',
  templateUrl: './key-info.page.html',
  styleUrls: ['./key-info.page.scss'],
})
export class KeyInfoPage implements OnInit {


  key = '';
  tone = '';
  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }

  async showKeys() {
    const opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Done'
        }
      ],
      columns: [
        {
          name: 'key',
          options: [
            {text: 'DO', value: 'do'},
            {text: 'DO#', value: 'do#'},
            {text: 'RE', value: 're'},
            {text: 'RE#', value: 're#'},
            {text: 'MI', value: 'mi'},
            {text: 'FA', value: 'fa'},
            {text: 'SOL', value: 'sol'},
            {text: 'SOL#', value: 'sol#'},

          ]
        }
      ]
    };

  // public index = [
  //     'DO',
  //     'DO#',
  //     'RE',
  //     'RE#',
  //     'MI',
  //     'FA',
  //     'FA#',
  //     'SOL',
  //     'SOL#',
  //     'LA',
  //     'LA#',
  //     'SI'
  //   ];
  }
}
