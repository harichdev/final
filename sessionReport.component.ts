import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { ReportsService } from 'app/reports.service';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
@Component({
  templateUrl: 'sessionReport.component.html',
  styles: ['.no-data-available { text-align: center; }']
})

export class SessionReportComponent implements OnInit {
  // dtOptions: DataTables.Settings = {};
  reports: any;
  allCategories: any;
  dates:any;
  @Input() public filter: CompositeFilterDescriptor;

  constructor(private sessionReportService: ReportsService) {}

  ngOnInit(): void {
    this.getReports();
  }

  getReports() {
    this.sessionReportService.getSessionReports().subscribe(
      data => {
        this.reports = data['data'];
       
      },
      err => console.error(err),
      () => console.log('Done Loading')
    );
  }

  public allData = (): Observable<any> => {
    const observable = this.sessionReportService.getSessionReports();
    observable.subscribe((result) => {
      this.allCategories = result;
    });
    return observable;
  }

}
