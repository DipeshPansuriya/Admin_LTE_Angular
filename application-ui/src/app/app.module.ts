import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { BlankpageComponent } from './pagelayout/blankpage/blankpage.component';
import { FullpageComponent } from './pagelayout/fullpage/fullpage.component';

@NgModule({
  declarations: [AppComponent, BlankpageComponent, FullpageComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
