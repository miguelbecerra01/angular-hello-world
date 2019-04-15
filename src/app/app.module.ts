import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; //the extension is addded by webpack
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UsersComponent } from './users/users.component';
import { DisplayDetails } from './display-details/display-details.component';


//register all the components
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,//import ServerComponent component
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsersComponent,
    DisplayDetails
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //which components angular should recognize at run first time
})
export class AppModule { }
