import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelreportComponent } from './travelReport.component';
import { ExpensesRoutingModule } from './expenses-routing.module';
import { AttendanceComponent } from './attendance.component';

@NgModule({
  declarations: [TravelreportComponent,AttendanceComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
