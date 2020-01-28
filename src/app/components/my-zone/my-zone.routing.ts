import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyZoneComponent } from './my-zone.component';


const routes: Routes = [
    { path: '', component: MyZoneComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyZoneRouting { }
