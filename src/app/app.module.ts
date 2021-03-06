import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { NewUrlComponent } from './new-url/new-url.component';
import { MyListComponent } from './my-list/my-list.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { LoginComponent } from './login/login.component';

import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  { path: '', redirectTo: '/my_list', pathMatch: 'full' },
  { path: 'favoritos', component: FavoritesComponent },
  { path: 'new_url', component: NewUrlComponent },
  { path: 'my_list', component: MyListComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NewUrlComponent,
    MyListComponent,
    FavoritesComponent,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
