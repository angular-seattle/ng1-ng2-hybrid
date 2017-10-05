/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloWorldComponent } from './hello-world.component';

function ng1RandomNumbersMock() {
  const service = {
    randomInt: function() {
      return 1;
    }
  };

  return service;
}

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let fixture: ComponentFixture<HelloWorldComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldComponent ],
      providers: [{provide: 'ng1RandomNumbers', useFactory: ng1RandomNumbersMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldComponent);
    component = fixture.componentInstance;
    element = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display hello-world', () => {
    expect(fixture.debugElement.query(By.css('p')).nativeElement.innerText).toBe('hello-world works!');
  });
});
