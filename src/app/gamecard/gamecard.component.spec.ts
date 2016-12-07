/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamecardComponent } from './gamecard.component';

describe('GamecardComponent', () => {
  let component: GamecardComponent;
  let fixture: ComponentFixture<GamecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
