import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewDocsComponent } from './new-docs.component';
import { NewDocsRouting } from './new-docs.routing';



@NgModule({
  declarations: [
    NewDocsComponent
  ],
  imports: [
    CommonModule,
    NewDocsRouting
  ],
  exports: [
    NewDocsComponent
  ]
})
export class NewDocsModule { }
