import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { ListTalentsComponent } from './list-talents.component';

describe('ListTalentsComponent', () => {
  let component: ListTalentsComponent;
  let fixture: ComponentFixture<ListTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTalentsComponent ],
      imports: [
        MatCardModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test fetch data on init', () => {
    component.listTalents = [];
    
    component.ngOnInit();

    expect(component.listTalents.length == 9);
  });
});
