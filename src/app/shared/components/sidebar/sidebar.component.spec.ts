import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar com isOpen como false', () => {
    expect(component.isOpen).toBe(false);
  });

  it('deve alternar isOpen ao chamar toggleSidebar', () => {
    component.toggleSidebar();
    expect(component.isOpen).toBe(true); 

    component.toggleSidebar();
    expect(component.isOpen).toBe(false);
  });

  it('deve ter as opções corretamente definidas', () => {
    expect(component.options.length).toBe(3);
    expect(component.options[0].name).toBe('Conheça seu cooperado');
    expect(component.options[1].name).toBe('Fale sobre a Cooperativa');
    expect(component.options[2].name).toBe('Documentos e comprovações necessárias');
  });

  it('deve ter os itens corretamente definidos', () => {
    expect(component.items.length).toBe(3);
    expect(component.items[0].length).toBe(3); 
    expect(component.items[1].length).toBe(2); 
    expect(component.items[2].length).toBe(4); 
  });
});
