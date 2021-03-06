import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditListingPageComponent } from './edit-listing-page.component';

describe('EditListingPageComponent', () => {
  let component: EditListingPageComponent;
  let fixture: ComponentFixture<EditListingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditListingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
