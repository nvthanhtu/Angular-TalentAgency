import { Component, Input } from '@angular/core';
import { Talent } from 'src/app/model/talent.model';

@Component({
  selector: 'app-talent-tag',
  templateUrl: './talent-tag.component.html',
  styleUrls: ['./talent-tag.component.css']
})
export class TalentTagComponent {
  @Input() talent:Talent|undefined;
  @Input() index?: number;
  constructor(){
    
  }
}
