import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { FormsModule }   from '@angular/forms';
import{ RouterModule, Routes } from '@angular/router';
import { route } from './app.route';
import {ConnectService} from './connect.service';
// import { AuthGuard } from './app.auth-guard'
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpModule
  ],
  providers: [ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
