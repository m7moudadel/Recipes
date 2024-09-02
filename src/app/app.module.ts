import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from './Components/auth/auth/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    HttpClientModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS , useClass:AuthInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
