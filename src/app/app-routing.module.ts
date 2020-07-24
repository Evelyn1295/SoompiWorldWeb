import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { AlbumComponent } from './album/album.component';
import { DiscographyComponent } from './discography/discography.component';
import { MoviesComponent } from './movies/movies.component';
import { IdolgroupComponent } from './idolgroup/idolgroup.component';
import { OstComponent } from './ost/ost.component';
import { SeriesComponent } from './series/series.component';
import { SinglesComponent } from './singles/singles.component';
import { SoloistsComponent } from './soloists/soloists.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'actor',
    component: ActorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'album',
    component: AlbumComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'discography',
    component: DiscographyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'idolgroup',
    component: IdolgroupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'ost',
    component: OstComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'series',
    component: SeriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'singles',
    component: SinglesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'soloist',
    component: SoloistsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
