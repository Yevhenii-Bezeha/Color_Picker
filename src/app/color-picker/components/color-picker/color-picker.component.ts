import { Component, OnInit } from '@angular/core';
import { Color, fakeDataColors } from '../../services/fakeData';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  public allColors = fakeDataColors;
  public selectedColors: any = new Set();

  constructor() {}

  ngOnInit(): void {}

  onClick(color: Color): void {
    this.selectedColors.add(color);
  }
}
