/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JobContactComponent } from './job-contact.component';

describe('JobContactComponent', () => {
  let component: JobContactComponent;
  let fixture: ComponentFixture<JobContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
