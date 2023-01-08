import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersViewComponent } from './characters-view/characters-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/charactersView' },
  { path: 'charactersView', component: CharactersViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
