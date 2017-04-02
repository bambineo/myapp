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
  interpret: string;
  constructor(private cdService:CdService) {
    this.cdService.getCds().
      subscribe(cds => { this.cds = cds });
  }

  addCd(event) {
    event.preventDefault();
    //console.log(event);
    var newCd = {
      id: null,
      interpret: this.interpret,
      titel: this.titel,
      jahr: '2010'
    }

    this.cdService.addCd(newCd).
      subscribe(cd => {
        console.log(cd.insertId);
        newCd.id = cd.insertId;
        this.cds.push(newCd);
        this.titel = '';
        this.interpret = '';
      });

  }

  deleteCd(cd) {
    var cds = this.cds;
    this.cdService.deleteCd(cd.id).subscribe(data => {
      console.log(data);
      if (data.affectedRows == 1) {
        if (cds.indexOf(cd) > -1) {
          cds.splice(cds.indexOf(cd), 1);
        }
        
      }
    });
  }

  ngOnInit() {
  }

}
