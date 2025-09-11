import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-abm',
  standalone: true,
  imports: [],
  templateUrl: './abm.component.html',
  styleUrl: './abm.component.css'
})
export class AbmComponent {

  @Input() userId!: string;
  @Input() tipoOperacion!: string;
}
