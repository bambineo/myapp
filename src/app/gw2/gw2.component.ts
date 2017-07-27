import { Component, OnInit } from '@angular/core';
import { Gw2Service } from '../gw2.service';

@Component({
  selector: 'app-gw2',
  templateUrl: './gw2.component.html',
  styleUrls: ['./gw2.component.css']
})
export class Gw2Component implements OnInit {

  anzahlMaterialien = 0;
  bankItems;

  constructor(private gw2Service: Gw2Service) {
    // this.gw2Service.getAccountInfo().subscribe(result => (console.log(result)))
  }

  getBankInfo() {
    this.gw2Service.getBank().subscribe(result => (
      console.log(result.length),
      console.log('test'),
      this.bankItems = result
      
      )
    )
  }

  getMaterialsInfo() {
    this.anzahlMaterialien = 0;
    this.gw2Service.getMaterials().subscribe(result => (
      this.anzahlMaterialien = result.length
      )
    )
  }

  getItem(id) {
    this.gw2Service.getItem(id).subscribe(result => (
      console.log(id)
      )
    )
  }

  ngOnInit() {
  }

}
