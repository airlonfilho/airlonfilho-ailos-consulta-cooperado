import { Component, Input, OnInit } from '@angular/core';
import { Cooperado } from '../../models/cooperado.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() cooperado: Cooperado | null = null;

  constructor() { }

  ngOnInit(): void {
  }
}
