import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';

import {MatTableModule} from '@angular/material/table';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatChipsModule} from '@angular/material/chips';

import { OrderModule } from 'ngx-order-pipe';
import { DetenidosComponent } from './detenidos/detenidos.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DetalleDetenidosComponent } from './detalle-detenidos/detalle-detenidos.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import {DatePipe} from './datedesc.pipe';
import { ReportesComponent } from './reportes/reportes.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetenidosComponent,
    DetalleDetenidosComponent,
    DatePipe,
    ReportesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatSlideToggleModule,
    
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  
    MatPaginatorModule,
    
    MatSortModule,
    MatTooltipModule,
    MatChipsModule,   

    OrderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
