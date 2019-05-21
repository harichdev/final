import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { groupBy, GroupResult } from '@progress/kendo-data-query';
import { DateRangeEndInputDirective } from '@progress/kendo-angular-dateinputs';
import { filterBy } from '@progress/kendo-data-query';
import { ReportsService } from 'app/reports.service';

// export interface Sample {
//   date: any;
//   videos: number;
//   id: string,
//   saathiname: string,
//   statename: string,
//   districtname: string,
//   villagename:string,
//   aadhar: string,
//   typeofViewer: string,
//   createdAt: any,
//   epocDate: any,
//   epocDateStr: string,
//   unixDate: number,

//   startTime: any,
//   duration: any,

//   tittles: any,
//   effectiveness:number

//   }
@Component({
  templateUrl: 'sessioncharts.component.html',
  styles: ['.no-data-available { text-align: center; }']
})

export class SessionchartsComponent implements OnInit {

  dates: any = [];
  //public data:Sample[]=[];

  //public series: Sample[] | GroupResult[];

  //public series1: Sample[] | GroupResult[];
  reports: any = [];
  allCategories: any;

  @Input() public filter: CompositeFilterDescriptor;
  series: GroupResult[] | {}[];
  series1: GroupResult[] | {}[];


  constructor(private sessionReportService: ReportsService) { }


  ngOnInit(): void {
    this.getReports();
  }



  getReports() {
    this.sessionReportService.getSessionReports().subscribe(
      data => {
        console.log(data);
      this.reports =  data['data'];
this.dates = data['data'].map(item => {
         item.testdate = new Date(item.epocDate).toDateString();
          return item;
      });
        this.series = groupBy(data['data'], [{ field: "typeofViewer" }]);
        this.series1 = groupBy(data['data'], [{ field: "villagename" }])





      },

      // err => console.error(err),
      // () => console.log('Done Loading')
    );
  }

  // public allData = (): Observable<any> => {
  //   const observable = this.sessionReportService.getSessionReports();
  //   observable.subscribe((result) => {
  //     this.allCategories = result;
  //   });
  //   return observable;
  // }

}


        //this.reports = groupBy(data, [{ field: "typeofViewer" }]);

       // this.dates = data.map(item => {
       //   item.testdate = new Date(item.epocDate).toDateString();
          //return item;
      // });
        //this.reports = data;
        //this.series1 = groupBy(data, [{ field: "villagename" }]);
     // })
   // }
 // }


  //  public allData = (): Observable<any> => {
  //   const observable = this.sessionReportService.getSessionReports();
  //    observable.subscribe((result) => {
  //      this.allCategories = result;
  //  });
  //    return observable;
  //  }













