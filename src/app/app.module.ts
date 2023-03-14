import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Comp1Component } from './component1/comp1.component';
import { PracticeComponent } from './practice/practice.component';
import { LastComponent } from './lastC/last.component';
import { FinalComponent } from './final/final.component';
import { ShortWayComponent } from './short-way/short-way.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { SubchildComponent } from './subchild/subchild.component';
import { ShowRecipesComponent } from './show-recipes/show-recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Comp1Component,
    PracticeComponent,
    LastComponent,
    FinalComponent,
    ShortWayComponent,
    ChildComponent,
    SubchildComponent,
    ShowRecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
