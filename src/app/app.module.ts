import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel está aquí
import { AppRoutingModule } from './app-routing.module';

// Rutas
import { APP_ROUTING } from './app.routes';


// Servicios
import { WaiterService } from './servicios/waiter.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { BreakfastComponent } from './components/breakfast/breakfast.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WaiterComponent,
    BreakfastComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    WaiterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
