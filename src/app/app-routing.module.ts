import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { CursoComponent } from './components/curso/curso.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PageNotFoundComponent } from './components/helper/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'cursos', component: CursoComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component:  PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
