import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ThemeComponent } from './theme/theme.component';
import { BibliotecaModule } from './pages/biblioteca/biblioteca.module';
import { AdministrationModule } from './pages/administration/administration.module';
import { SettingsModule } from './pages/settings/settings.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BibliotecaModule,
    AdministrationModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
