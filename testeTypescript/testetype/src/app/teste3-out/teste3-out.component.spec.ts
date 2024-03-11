import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Teste3OutComponent } from './teste3-out.component';

describe('Teste3OutComponent', () => {
  let component: Teste3OutComponent;
  let fixture: ComponentFixture<Teste3OutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Teste3OutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Teste3OutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
