import { Component, OnInit } from '@angular/core';
import { CdService } from '../cd.service';
import { Cd } from '../../cd';

@Component({
  selector: 'app-cds',
  templateUrl: './cds.component.html',
  styleUrls: ['./cds.component.css']
})
export class CdsComponent implements OnInit {
  cds: Cd[];
  titel: string;
  constructor(private cdService:CdService) {
    this.cdService.getCds().
      subscribe(cds => { this.cds = cds });
  }

  addCd(event) {
    event.preventDefault();
    console.log(event);
    var newCd = {
      titel: this.titel,
      jahr: '2010'
    }

    this.cdService.addCd(newCd).
      subscribe(cd => {
        this.cds.push(cd);
        this.titel = '';
      });

  }

  deleteCd(id) {
    var cds = this.cds;
    this.cdService.deleteCd(id).subscribe(data => {
      console.log(data);
      if (data.affectedRows == 1) {
        for (var i=0;i < cds.length; i++) {
          if (cds[i].id == id) {
            cds.splice(i, 1);
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
