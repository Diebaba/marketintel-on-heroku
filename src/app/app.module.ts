import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from '@angular/material/table';



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
import { AccueilComponent } from './accueil/accueil.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { VoitureComponent } from './voiture/voiture.component';
import { UnivPubliqueComponent } from './univ-publique/univ-publique.component';
import { RestaurantSenegalComponent } from './restaurant/restaurant-senegal/restaurant-senegal.component';
import { RestaurantCoteComponent} from './restaurant/restaurant-cote/restaurant-cote.component';
import { RestaurantBeninComponent } from './restaurant/restaurant-benin/restaurant-benin.component';
import { RestaurantBeninService } from './services/restaurant-benin.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { RestaurantGuineeComponent } from './restaurant/restaurant-guinee/restaurant-guinee.component';
import { RestaurantTogoComponent } from './restaurant/restaurant-togo/restaurant-togo.component';
import { RestaurantAfriquedusudComponent } from './restaurant/restaurant-afriquedusud/restaurant-afriquedusud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RestaurantRegionComponent } from './restaurant/restaurant-region/restaurant-region.component';

const appRoutes:Routes=[

  { path: '', component: AccueilComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'ecole', component: EcoleComponent },
  { path: 'universite', component:  UniversiteComponent },
  { path: 'univPublique', component:  UnivPubliqueComponent },
  { path: 'senegal', component: RestaurantSenegalComponent },
  { path: 'cote' , component: RestaurantCoteComponent },
  { path: 'benin', component: RestaurantBeninComponent },
  { path: 'statistique', component: GraphicComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'table', component: TableComponent },
  { path: 'immobilier', component: ImmobilierComponent},
  { path: 'restaurant', component: RestaurantComponent},
  { path: 'voiture', component: VoitureComponent},
  { path: 'offre', component: OffreComponent},
  { path: 'guinee', component: RestaurantGuineeComponent},
  { path: 'togo', component: RestaurantTogoComponent},
  { path: 'afriquedusud', component: RestaurantAfriquedusudComponent },
  {path: 'restaurantRegion', component: RestaurantRegionComponent }


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
    EcoleComponent,
    UniversiteComponent,
    AccueilComponent,
    ImmobilierComponent,
    RestaurantComponent,
    VoitureComponent,
    OffreComponent,
    UnivPubliqueComponent,
    RestaurantSenegalComponent,
    RestaurantCoteComponent,
    RestaurantBeninComponent,
    RestaurantGuineeComponent,
    RestaurantTogoComponent,
    RestaurantAfriquedusudComponent,
    RestaurantRegionComponent,
    ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AppRoutingModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgbModule,
    NgxNavbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
