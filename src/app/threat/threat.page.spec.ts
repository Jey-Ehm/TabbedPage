import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThreatPage } from './threat.page';

describe('ThreatPage', () => {
  let component: ThreatPage;
  let fixture: ComponentFixture<ThreatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThreatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
