import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularformComponent } from './tabularform.component';

describe('TabularformComponent', () => {
  let component: TabularformComponent;
  let fixture: ComponentFixture<TabularformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabularformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
