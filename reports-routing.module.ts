import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SessionReportComponent } from './sessionReport.component';
import { SaathiReportComponent } from './saathiReport.component';
import { ViewerReportComponent} from './viewerReport.component';
import { StatsComponent } from './stats.component';
import { ProductsComponent } from '../products/products.component';
import { SessionchartsComponent } from './sessioncharts.component';
const routes: Routes = [
  {
    path: '',
    /* data: {
      title: 'Reports'
    }, */
    children: [
      {
        path: 'saathireport',
        component: SaathiReportComponent,
        data: {
          title: 'Swasthya Saathi Report'
        }
      },
      {
        path: 'sessionreport',
        component: SessionReportComponent,
        data: {
          title: 'Session Report'
        }
      },

      {
        path: 'viewerreport',
        component: ViewerReportComponent,
        data: {
          title: 'Viewer Report'
        }
      },
      {
        path: 'stats',
        component: StatsComponent,
        data: {
          title: 'Statistics'
        }
      }
      ,
     {
         path: 'sessioncharts',
       component:SessionchartsComponent ,
        data: {
       title: 'sessioncharts'
       }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReportsRoutingModule {}
