import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyplanComponent } from './myPlan.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        redirectTo: 'myPlan'
      },
      {
        path: 'customer',
        component: CustomerComponent,
        data: {
          title: 'Customer'
        }
      },
      {
        path: 'myPlan',
        component: MyplanComponent,
        data: {
          title: 'My plan'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {}
