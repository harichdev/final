import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { aggregateBy } from '@progress/kendo-data-query';


import { ReportsService } from 'app/reports.service';


class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  templateUrl: './saathiReport.component.html',
  styles: ['.no-data-available { text-align: center; }']
})

export class SaathiReportComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  reports: any;
  numVillages: any;
  dtTrigger: Subject<any> = new Subject();
  public allData: any = {};
  constructor(private _saathiService: ReportsService) {}

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // }
    this.getReports();
  }

  getReports() {
    this._saathiService.getSaathiList().subscribe(
      data => {
        this.reports = data['data'];
        console.log(this.reports);
        this.dtTrigger.next();
      },
      err => console.error(err),
      () => console.log('Done Loading')
    );
  }

  // public allData(): ExcelExportData {
  //   const result: ExcelExportData =  {
  //       data: process(products, { group: this.group, sort: [{ field: 'ProductID', dir: 'asc' }] }).data,
  //       group: this.group
  //   };

  //   return result;
  // }

}

