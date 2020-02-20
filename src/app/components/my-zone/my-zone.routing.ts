import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyZoneComponent } from './my-zone.component';


const routes: Routes = [
  {
    path: '',
    component: MyZoneComponent,
    children: [
      { path: 'docs/new', loadChildren: () => import('./../docs/new-docs/new-docs.module').then(m => m.NewDocsModule) },
      { path: 'notes', loadChildren: () => import('./../notes/notes.module').then(m => m.NotesModule) },
      { path: 'search', loadChildren: () => import('./../search/search.module').then(m => m.SearchModule) },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyZoneRouting { }
