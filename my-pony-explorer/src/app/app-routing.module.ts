import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { DetailsViewComponent } from './details-view/details-view.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/charactersView' },
  { path: 'charactersView', component: CharactersViewComponent },
  { path: 'detailsView/:id', component: DetailsViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
