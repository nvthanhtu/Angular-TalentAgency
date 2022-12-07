import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';

import { TalentTagComponent } from './talent-tag.component';

describe('TalentTagComponent', () => {
  let component: TalentTagComponent;
  let fixture: ComponentFixture<TalentTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TalentTagComponent],
      imports: [
        MatCardModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TalentTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test 1', () => {
    expect(component).toBeTruthy();
  });
});
