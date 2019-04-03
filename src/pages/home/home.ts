import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider} from '../../providers/database/database';
import { DetailPage} from '../detail/detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado = 0;
  num1 : number ;
  num2 : number ;


  constructor(public navCtrl: NavController, private database: DatabaseProvider) {
    this.database.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        console.log('ready');
      }
    })
  }

  Suma(){
    this.resultado = Number(this.num1) + Number(this.num2);

    this.database.addData("Suma",this.resultado).then(data =>{
      console.log("suma")
    }, err =>{
      console.log(err);
    });
  }

  Resta(){
    this.resultado = this.num1 - this.num2;
    this.database.addData("Resta",this.resultado).then(data =>{
      console.log("suma")
    }, err =>{
      console.log(err);
    });

  }

  Division(){
    if(this.num2 != 0){
      this.resultado = this.num1 / this.num2;
      this.database.addData("Division",this.resultado).then(data =>{
        console.log("suma")
      }, err =>{
        console.log(err);
      });

    }
    else{
      alert("Division entre 0");
    }


  }
  Operaciones(){
    this.navCtrl.push(DetailPage);
  }

  Multiplicacion(){
    this.resultado = this.num1 * this.num2;
    this.database.addData("Multiplicacion",this.resultado).then(data =>{
      console.log("suma")
    }, err =>{
      console.log(err);
    });

  }

}
