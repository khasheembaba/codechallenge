import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviegalleryComponent } from './moviegallery/moviegallery.component';
import { JsonpModule } from '@angular/http';
import { GetdataserviceService } from './getdataservice.service';
import { GamecardComponent } from './gamecard/gamecard.component';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

const appRoutes:Routes=[{path:'cardgame',component:GamecardComponent},
    {path:'gallery',component:MoviegalleryComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviegalleryComponent,
    GamecardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [GetdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
