import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatDividerModule } from '@angular/material/divider';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthGuard } from './auth.guard';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActorComponent } from './actor/actor.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { OstComponent } from './ost/ost.component';
import { AlbumComponent } from './album/album.component';
import { DiscographyComponent } from './discography/discography.component';
import { IdolgroupComponent } from './idolgroup/idolgroup.component';
import { SinglesComponent } from './singles/singles.component';
import { SoloistsComponent } from './soloists/soloists.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SideBarComponent,
    ActorComponent,
    SeriesComponent,
    MoviesComponent,
    OstComponent,
    AlbumComponent,
    DiscographyComponent,
    IdolgroupComponent,
    SinglesComponent,
    SoloistsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatToolbarModule,
    CarouselModule,
    MatSnackBarModule,
    NgxEchartsModule.forRoot({
      echarts,
    })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
