import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { DataTablesModule } from 'angular-datatables';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsService } from 'app/reports.service';
import { SessionReportComponent } from './sessionReport.component';
import { SaathiReportComponent } from './saathiReport.component';
import { ViewerReportComponent } from './viewerReport.component';
import { StatsComponent } from './stats.component';
import { ProductsComponent } from '../products/products.component';
import { DateRangeModule, DateInputModule } from '@progress/kendo-angular-dateinputs';
import { DateRangeFilterCellComponent } from './date-range-cell-filter.component';
import { SessionchartsComponent } from './sessioncharts.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReportsRoutingModule,
    ChartsModule,
    BsDropdownModule,
    //    DataTablesModule,
    DateRangeModule,
    DateInputModule,
    GridModule,
    ExcelModule
  ],
  providers: [
    ReportsService
  ],
  declarations: [
    DateRangeFilterCellComponent,
    SessionReportComponent,
    SaathiReportComponent,
    ViewerReportComponent ,
    StatsComponent,
    ProductsComponent,
    SessionchartsComponent
  
  ]
})

export class ReportModule { }
