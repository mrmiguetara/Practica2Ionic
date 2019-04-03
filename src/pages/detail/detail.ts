import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider} from '../../providers/database/database';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  items;
  constructor(public navCtrl: NavController, private database: DatabaseProvider) {
    this.database.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.loadOp();
        console.log('ready');
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  loadOp(){
    this.database.getAllData().then(data =>{
      this.items = data;
    })

  }
  

}
