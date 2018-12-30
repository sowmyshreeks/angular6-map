import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
  // public random(min: number, max: number) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  public tableList: any[] = [
    {
      companyName: 'Goalsr India',
      contactNo: 'vikas',
      purposeofVisit: 'collect Invoice',
      location:'Banglore',
      status: 'Active',
    },
    {
      companyName: 'IBM',
      contactNo: 'vikas',
      purposeofVisit: 'collect Invoice',
      location:'Mysore',
      status: 'progress',
    },
    {
      companyName: 'ACC',
      contactNo: 'vikas',
      purposeofVisit: 'collect Invoice',
      location:'Kengeri',
      status: 'Completed',
    }
  ];

  public headerList: any[] = [
    {
      count: '200',
      title: 'Open Visit',
      iconClass: 'fa fa-map-marker',
    },
    {
      count: '2000',
      title: 'Total Visit',
      icon: 'fa fa-map-marker',
    },
    {
      count: '3000',
      title: 'Total Client',
      icon: 'fa fa-map-marker',
    },
    {
      count: '400',
      title: 'Clims',
      icon: 'fa fa-map-marker',
    },
  ];

  //to checkin
checkIn(list){
     console.log(list);
  let payload = {
          details:list,
          date: new Date(),
          status:'progress'
          }
// this.getTimerValue(payload.date);
console.log('pay===>',payload);
};

//to start timer
// getTimerValue(customer) {
//   customer = {};
//   customer["checkInTime"] = "Dec 24, 2018 15:37:25";
//   var countDownDate = new Date(customer.checkInTime).getTime();
//   var x = setInterval(function() {
  
//     var now = new Date().getTime();
  
//     var distance =  now - countDownDate;
//   //    console.log(distance);
      
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
//     // Output the result in an element with id="demo"
//     let timeString = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";
      
//     // If the count down is over, write some text 
//     if (customer.status == "Completed") {
//       clearInterval(x);
//       timeString = "Completed";
//     }
//     console.log("timeString ===>>>> ",timeString)

//    return timeString;
//   }, 1000);
// }

  ngOnInit(): void {
    // generate random values for mainChart
  }
}
