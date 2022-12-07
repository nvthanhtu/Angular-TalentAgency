import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { TalentData } from 'src/app/model/api-result.model';
import { Talent } from 'src/app/model/talent.model';

@Component({
  selector: 'app-detail-talent',
  templateUrl: './detail-talent.component.html',
  styleUrls: ['./detail-talent.component.css']
})

export class DetailTalentComponent implements OnInit {
  talent?: Talent;

  loginForm: FormGroup;
  listGender: string[] = ['male','female'];
  filteredOptions?: Observable<string[]>;

 constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder){
  this.loginForm = new FormGroup({
    firstName: new FormControl(null),
    lastName: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    gender: new FormControl(null,[Validators.required]),
    nat: new FormControl(null),
  })
 }

 ngOnInit(): void {
    // this.activatedRoute.data.subscribe(res => {
    //   this.talent = (res as TalentData).talent;
    //   this.createNewForm();
    // });
    this.talent = (this.activatedRoute.snapshot.data['talent'] as Talent);
    this.createNewForm();
  }

  createNewForm(){
    this.loginForm = this.fb.group({
      firstName: new FormControl(this.talent?.name?.first,[Validators.required]),
      lastName: new FormControl(this.talent?.name?.first,[Validators.required]),
      email: new FormControl(this.talent?.email,[Validators.required,Validators.email]),
      gender: new FormControl(this.talent?.gender,[Validators.required]),
      nat: new FormControl(this.talent?.nat)
    });

    this.filteredOptions = this.loginForm.controls['gender'].valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
  }

  filter(val: string): string[] {
    return this.listGender.filter(gender =>
      gender.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }
}
