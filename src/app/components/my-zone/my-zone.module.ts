import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyZoneComponent } from './my-zone.component';

import { MyZoneRouting } from './my-zone.routing';


@NgModule({
  declarations: [
    MyZoneComponent
  ],
  imports: [
    CommonModule,
    MyZoneRouting
  ]
})
export class MyZoneModule { }
