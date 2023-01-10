import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersViewComponent } from './characters-view/characters-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetailsViewComponent } from './details-view/details-view.component';

@NgModule({
  declarations: [AppComponent, CharactersViewComponent, DetailsViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
