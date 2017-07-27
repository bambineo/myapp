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

  }

  getBankInfo() {
    this.gw2Service.getBank().subscribe(bankItems => (
      bankItems.forEach(element => {
        if (element) {
          this.gw2Service.getItem(element.id).subscribe(item => (
            element.item = item
          ))
        }
        this.bankItems = bankItems
      })
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
    var itemName = '';
    this.gw2Service.getItem(id).subscribe(result => (
      console.log(result.name),
      itemName = result.name
    )
    )

  }

  ngOnInit() {
  }

}
