import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyZoneComponent } from './my-zone.component';


const routes: Routes = [
  {
    path: '',
    component: MyZoneComponent,
    children: [
      { path: 'docs/new', loadChildren: () => import('./../docs/new-docs/new-docs.module').then(m => m.NewDocsModule) },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyZoneRouting { }
