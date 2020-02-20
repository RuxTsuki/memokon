import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotesComponent } from './notes.component';


const routes: Routes = [
  { path: '', component: NotesComponent },


  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
