import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/helper/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { FoooterComponent } from './components/helper/foooter/foooter.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CursoComponent } from './components/curso/curso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { PageNotFoundComponent } from './components/helper/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    FoooterComponent,
    NosotrosComponent,
    CursoComponent,
    ContactoComponent,
    EntradaComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
