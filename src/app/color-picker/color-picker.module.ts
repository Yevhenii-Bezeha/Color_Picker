import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ColorPickerComponent, ListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule {}
