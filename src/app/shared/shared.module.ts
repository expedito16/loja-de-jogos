import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SpinnerComponent } from './spinner/spinner.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    FooterComponent
  ]
})
export class SharedModule { }
