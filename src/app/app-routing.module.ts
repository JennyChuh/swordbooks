import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';

const routes: any = [
  {path: 'home', component: HomeComponent, data: {breadcrumb: '', name: 'home'}},
  {path: 'books', component: BooksComponent, data: {breadcrumb: '', name: 'books'}},
  {path: '', component: HomeComponent, data: {breadcrumb: ''}},
  {path: '**', component: HomeComponent, data: {breadcrumb: ''}},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
