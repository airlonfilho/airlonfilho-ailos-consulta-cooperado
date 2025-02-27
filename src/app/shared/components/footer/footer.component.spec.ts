import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit novaAdmissao when novaAdmissao is called', () => {
    jest.spyOn(component.novaAdmissao, 'emit');
    component.novaAdmissao.emit();
    expect(component.novaAdmissao.emit).toHaveBeenCalled();
  });

  it('should emit abrirSidebar when abrirSidebar is called', () => {
    jest.spyOn(component.abrirSidebar, 'emit');
    component.abrirSidebar.emit();
    expect(component.abrirSidebar.emit).toHaveBeenCalled();
  });

  it('should have exibirNovaAdmissao as false by default', () => {
    expect(component.exibirNovaAdmissao).toBe(false);
  });
});
