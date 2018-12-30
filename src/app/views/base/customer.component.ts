import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  templateUrl: 'customer.component.html',
  styleUrls: ["customer.component.css"]
})
export class CustomerComponent implements OnInit{

  ngOnInit() {}

  addCustomer() {
    $('#myModal').modal();
  }
  
//   name:string;
//   id:any;
// searchCustomer(){
//   let customerArray =      [
//     {"name":"sowmya","id":"001"},
//     {"name":"arjun","id":"002"},
//     {"name":"madhuri","id":"003"},
//     {"name":"shilpa","id":"004"}
//    ];
// console.log(customerArray);
// }

  constructor(private router: Router,) { }
  
  location() {
    // sessionStorage.setItem('currentuser');
        this.router.navigate(['./collapses']);
  }

}
