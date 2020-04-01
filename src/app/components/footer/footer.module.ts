import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatSlideToggleModule
  ],
  exports: [
    FooterComponent
  ],
  entryComponents: [
    FooterComponent
  ]
})
export class FooterModule { }
