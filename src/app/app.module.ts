import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {SearchComponent} from './search/search.component';
import {NgZorroAntdModule, NzButtonModule, NzIconModule, NzInputModule, NzWaveModule} from 'ng-zorro-antd';
import {BookmenuComponent} from './bookmenu/bookmenu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzInputModule,
    NzButtonModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NzWaveModule,
    NzIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
