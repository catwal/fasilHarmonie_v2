import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyInfoPage } from './key-info.page';

describe('KeyInfoPage', () => {
  let component: KeyInfoPage;
  let fixture: ComponentFixture<KeyInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
