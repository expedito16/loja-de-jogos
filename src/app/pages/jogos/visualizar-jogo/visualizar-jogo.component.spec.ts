import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarJogoComponent } from './visualizar-jogo.component';

describe('VisualizarJogoComponent', () => {
  let component: VisualizarJogoComponent;
  let fixture: ComponentFixture<VisualizarJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizarJogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
