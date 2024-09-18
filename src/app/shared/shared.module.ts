import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SharedModule { }
