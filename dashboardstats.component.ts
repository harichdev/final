import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

import { ReportsService } from 'app/reports.service';

@Component({
  templateUrl: 'dashboardstats.component.html',
  styles: ['.no-data-available { text-align: center; }']
})

export class DashboardStatsComponent implements OnInit {

  sstrainedCount: any;
  noOfPregnantAndLactating: any;
  lactatingMothersEducated: number;
  noOfWomenEducated: number;
  minutes: number;
  noOfVillagesImpactedCount: any;
  hours: any;
  educatedCount: any;

  constructor(private statsReports: ReportsService) {
    this.educatedCount = 0;
    this.noOfVillagesImpactedCount = 0;
    this.sstrainedCount = 0;
    this.hours = 0;
    this.minutes = 0;
    this.noOfWomenEducated = 0;
    this.lactatingMothersEducated = 0;
  }



  ngOnInit(): void {
     this.getVillageCount();
     this.getHours();
     this.getEducatedCount();
  }

  getVillageCount() {
    this.statsReports.getNumOfVillagesImpacted().subscribe(
      data => {
        this.noOfVillagesImpactedCount = data['noOfVillagesImpactedCount'];
        this.sstrainedCount = data['sstrainedCount'];
        console.log(this.noOfVillagesImpactedCount);
      },
      err => console.error(err),
      () => console.log('Done Loading')
    );
  }
  getHours() {

    this.statsReports.getHoursLearned().subscribe(
      data => {
        this.hours = data['hours'];
        this.minutes = data['minutes'];
        console.log(this.noOfVillagesImpactedCount);
      },
      err => console.error(err),
      () => console.log('Done Loading')
    );
  }
  getEducatedCount(): void {

    this.statsReports.getNumOfEducated().subscribe(
      data => {
        this.educatedCount = data['noOfEducatedcount'];
        this.noOfPregnantAndLactating = data['noOfPregnantAndLactating'];
        this.noOfWomenEducated = data['noOfWomenEducated'];
      },
      err => console.error(err),
      () => console.log('Done Loading')
    );
  }

}

// /**  OLD CODE FOR REFERENCE ONLY **  SYAM
//  *  dashboardCtrl
//  *  @author Sudheer
//  **/
// 'use strict';
// angular.module('healthApplicationApp')
//     .controller('dashboardCtrl', function ($scope, $location, $http) {

//         var noofEducated = function () {
//             $http.get(baseURL + '/index/noOfEducated').then(function (response) {
//                 $scope.nofoEducated = response.data.noOfEducatedcount;
//                 $scope.noOfPregnantAndLactating = response.data.noOfPregnantAndLactating;
//                 $scope.noOfWomenEducated = response.data.noOfWomenEducated;
//             }, function (err) {
//                 console.log(err);
//             });

//             $http.get(baseURL + '/index/noOfVillagesImpacted').then(function (response) {
//                 $scope.noOfVillagesImpactedCount = response.data.noOfVillagesImpactedCount;
//                 $scope.sstrainedCount = response.data.sstrainedCount;
//             }, function (err) {
//                 console.log(err);
//             });

//             $http.get(baseURL + '/index/hoursLearned').then(function (response) {
//                 console.log("sasas", response);
//                 $scope.hours = response.data.hours;
//                 $scope.minutes = response.data.minutes;

//             }, function (err) {
//                 console.log(err);
//             });
//         }();

//     });
