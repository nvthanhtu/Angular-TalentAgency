import { Component, OnInit } from '@angular/core';
import { Talent } from '../model/talent.model';
import { TalentsServiceService } from '../services/talents-service/talents-service.service';

@Component({
  selector: 'app-list-talents',
  templateUrl: './list-talents.component.html',
  styleUrls: ['./list-talents.component.css']
})


export class ListTalentsComponent implements OnInit {

  public listTalents: Talent[];

  constructor(private talentService: TalentsServiceService){
    this.listTalents = [];
    
  }

  ngOnInit(): void {
    this.getAndDisplayNineTalents();
  }

  getAndDisplayNineTalents(){
    this.talentService.getNineUsers().subscribe(
      result => {this.listTalents = result;});
  }

  helloWorld(){
    console.log("Hello world");
  }
}
