import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorComponent } from './error.component';
import { Router } from '@angular/router';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let router: Router;

  beforeEach(async () => {
    const routerMock = {
      navigate: jest.fn() 
    };

    await TestBed.configureTestingModule({
      declarations: [ErrorComponent],
      providers: [
        { provide: Router, useValue: routerMock } 
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve navegar de volta para a página inicial ao chamar goBack', () => {
    component.goBack();

    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });
});
