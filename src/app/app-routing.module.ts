import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {BookmenuComponent} from './bookmenu/bookmenu.component';

const routes: any = [
  {path: 'menu', component: BookmenuComponent, data: {breadcrumb: ''}, children: [
      {path: 'search', component: SearchComponent, data: {breadcrumb: '主页'}}
    ]},
  {path: '**', component: BookmenuComponent},
  {path: '', component: BookmenuComponent}
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
