import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color } from '../../services/fakeData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input('colorsArr') public colorsArr: Color[] | undefined;
  @Input('shouldBeChecked') public isChecked: boolean = false;

  @Output() public colorSelected: EventEmitter<Color> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(color: Color): void {
    this.colorSelected.emit(color);
  }
}
