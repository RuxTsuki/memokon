import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyZoneComponent } from './my-zone.component';

import { MyZoneRouting } from './my-zone.routing';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [
    MyZoneComponent
  ],
  imports: [
    CommonModule,
    MyZoneRouting,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTooltipModule,
    MatSidenavModule
  ]
})
export class MyZoneModule { }
