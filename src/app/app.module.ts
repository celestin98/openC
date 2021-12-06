import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {PostListComponentComponent} from './component/post-list-component/post-list-component.component';
import {PostListItemComponentComponent} from './component/post-list-item-component/post-list-item-component.component';
import {NavBarComponent} from './component/nav-bar/nav-bar.component';
import {Router, RouterModule, Routes} from "@angular/router";
import { Exercice1Component } from './pages/exercice1/exercice1.component';
import { Exervice2Component } from './pages/exervice2/exervice2.component';

const router: Routes = [
  {path:'', redirectTo:'exercice1',pathMatch:'full'},
  {path:'exercice1',component:Exercice1Component},
  {path:'exercice2', component: Exervice2Component}

]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NavBarComponent,
    Exercice1Component,
    Exervice2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}

