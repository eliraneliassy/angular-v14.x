import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-name',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit {

  @Input() name?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
