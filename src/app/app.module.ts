import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDialogModule, MatExpansionModule,
  MatGridListModule, MatIconModule, MatInputModule, MatLineModule, MatListModule, MatMenuModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatSidenavModule, MatSnackBarModule, MatTabsModule, MatToolbarModule,
  MatSlideToggleModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClearDialogComponent } from './clear-dialog/clear-dialog.component';
import { LocationDialogComponent } from './location-dialog/location-dialog.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ClearDialogComponent,
    LocationDialogComponent,
    InfoComponent
  ],
  imports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatProgressBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatLineModule,
    MatChipsModule,
    MatGridListModule,
    MatDialogModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ClearDialogComponent,
    LocationDialogComponent
  ]
})
export class AppModule { }
