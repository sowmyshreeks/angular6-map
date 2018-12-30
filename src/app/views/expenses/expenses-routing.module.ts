import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelreportComponent } from './travelReport.component';
import { AttendanceComponent } from './attendance.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'expenses'
    },
    children: [
      {
        path: '',
        redirectTo: 'travelReport',
        pathMatch: 'full'
      },
      {
        path: 'travelReport',
        component: TravelreportComponent,
        data: {
          title: 'Travelreport'
        }
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
        data: {
          title: 'attendance'
        }
      },
    //   {
    //     path: 'popovers',
    //     component: PopoversComponent,
    //     data: {
    //       title: 'Popover'
    //     }
    //   },
    //   {
    //     path: 'customer',
    //     component: CustomerComponent,
    //     data: {
    //       title: 'customer'
    //     }
    //   },
    //   {
    //     path: 'myPlan',
    //     component: MyplanComponent,
    //     data: {
    //       title: 'myPlan'
    //     }
    //   }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {}
