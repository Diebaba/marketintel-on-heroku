import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Route } from '@angular/compiler/src/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleComponent } from './layout/article/article.component';
import { DetailComponent } from './layout/detail/detail.component';
import { EcoleComponent } from './layout/ecole/ecole.component';
import { UniversiteComponent } from './layout/universite/universite.component';
import { OffreComponent } from './layout/offre/offre.component';
import { GraphicComponent } from './layout/graphic/graphic.component';
import { MapsComponent } from './layout/maps/maps.component';
import { TableComponent } from './layout/table/table.component';



const appRoutes:Routes=[

  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'ecole', component: EcoleComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'table', component: TableComponent },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    GraphicComponent,
    TableComponent,
    MapsComponent,
    ArticleComponent,
    DetailComponent,
    FooterComponent,
    EcoleComponent
    ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), AppRoutingModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
