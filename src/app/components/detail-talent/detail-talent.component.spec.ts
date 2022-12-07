import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';

import { DetailTalentComponent } from './detail-talent.component';

describe('DetailTalentComponent', () => {
  let component: DetailTalentComponent;
  let fixture: ComponentFixture<DetailTalentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTalentComponent ],
      imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatInputModule,
        NoopAnimationsModule,
      ],
      providers: [  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTalentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
