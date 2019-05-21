import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { ReportsService } from 'app/reports.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  templateUrl: 'viewerReport.component.html',
  styles: ['.no-data-available { text-align: center; }']
})

export class ViewerReportComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  reports: any;
  dtTrigger: Subject<any> = new Subject();
  constructor(private viewerReports: ReportsService) {}

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10
    // }
    this.getReports();
  }

  getReports() {
    this.viewerReports.getSessionReports().subscribe(
      data => {
        this.reports = data['data'];
        console.log(this.reports);
        this.dtTrigger.next();
      },
      err => console.error(err),
      () => console.log('Done with getReports()')
    );
  }

}
