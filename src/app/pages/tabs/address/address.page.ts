import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  isLoading: boolean;
  addresses: any[]=[];

  constructor() { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(){
    this.isLoading = true;
    setTimeout(()=>{
      this.addresses = [
        {
          address: "MG Road, Bangalore, Karnataka 560001, India",
          house: "KromaApps Office,",
          id: "order1",
          landmark:  "", 
          lat: 23.443353353,
          lng: 31.222131313,
          title: "Work",
          user_id: "1"
        },
        {
          address: "56, Park Street, Kolkata, West Bengal 700016, India",
          house: "Flat 202",
          id: "order2",
          landmark:  "Market", 
          lat: 24.443353353,
          lng: 30.222131313,
          title: "LBS Marg Market",
          user_id: "2"
        },
        {
          address: "Shil-Mhape Road, Shil - 421204",
          house: "304/A, Ameen Palace,",
          id: "order3",
          landmark:  "HP Petroleum", 
          lat: 25.443353353,
          lng: 29.222131313,
          title: "Home",
          user_id: "3"
        },
      ];
      this.isLoading = false;
    }, 1800)
  }

  getIcon(title){
    const name = title.toLowerCase();
    switch(name){
      case 'home': return 'home-outline';
      case 'work': return 'briefcase-outline';
      default: return 'location-outline';
    }
  }

  editAddress(address){
    console.log(address)
  }

  deleteAddress(address){
    console.log(address)
  }

}
