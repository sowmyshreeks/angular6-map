import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  templateUrl: 'travelReport.component.html',
  styleUrls: ["travelReport.component.css"]
})
export class TravelreportComponent implements OnInit{

  ngOnInit() {}

  constructor() { }
  
  public tableList: any[] = [
    {
      type: 'Travel',
      mode: 'car',
      method: 'transportation',
      distance: '4.5 Km',
      amount:'1000',
      approved_amount: '1000',
    },
    {
      type: 'Claim',
      mode: 'food',
      method:'food',
      distance: 'dinner',
      amount:'500',
      approved_amount: '1000',
    },
    {
      type: 'Claim',
      mode: 'stay',
      method:'stay',
      distance: 'Accommodation',
      amount:'2000',
      approved_amount: '1000',
    },
    {
      type: 'Travel',
      mode: 'bus',
      method: 'transportation',
      distance: '7.5 Km',
      amount:'100',
      approved_amount: '100',
    },
    {
      type: 'Travel',
      mode: 'two_wheeler',
      method: 'transportation',
      distance: '7.5 Km',
      amount:'100',
      approved_amount: '100',
    }
  ];


}
