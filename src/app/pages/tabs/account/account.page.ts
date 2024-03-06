import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

    profile: any = {};
    isLoading: boolean;

    orders = []
        

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  logout(){}

  reorder(order){
    console.log(order)
  }

  getHelp(order){
    console.log(order)
  }

  getData(){
    this.isLoading = true;
    setTimeout(()=>{
        this.profile={
            name: 'Mohammed Afjal Shaikh',
            phone: '8169165594',
            email: 'afzal91004@gmail.com'
        }
        this.orders= [
            {
                address: {
                    address: "12/3, MG Road, Bangalore, Karnataka 560001, India",
                    house: "Apartment 101",
                    id: "order1",
                    landmark:  "Bazar", 
                    lat: 23.443353353,
                    lng: 31.222131313,
                    title: "MG Road Bazar",
                    user_id: "1"
                },
                deliveryCharge: 20,
                grandTotal: "540.00",
                id: "asdenef22e23233",
                order: [
                    { category_id: "e10", cover: "assets/biriyani.jpg", desc: "Delicious biryani", id: "1", name: "Hyderabadi Biryani", price: "", quantity: 3 },
                    { category_id: "e20", cover: "assets/naan.jpg", desc: "Soft naan", id: "2", name: "Butter Naan", price: "", quantity: 12 }
                ],
                paid: "Online",
                restaurant: {
                    name: "ABC Hotel",
                    address: "34, Brigade Road, Bangalore, Karnataka 560001, India",
                    city: "Bangalore",
                    closeTime: "23:00",
                    cover: "assets/img1.jpg",
                    cuisines: "Indian"
                },
                restaurant_id: "1",
                status: "Delivered",
                time: "Mar 5, 2024 10:30 AM",
                total: "520.00",
                user_id: "123"
            },
            {
                address: {
                    address: "56, Park Street, Kolkata, West Bengal 700016, India",
                    house: "Flat 202",
                    id: "order2",
                    landmark:  "Market", 
                    lat: 24.443353353,
                    lng: 30.222131313,
                    title: "LBS Marg Market",
                    user_id: "2"
                },
                deliveryCharge: 15,
                grandTotal: "450.00",
                id:"fed23224423fewfefew",
                order: [
                    { category_id: "e30", cover: "assets/dosa.jpeg", desc: "Crispy dosa", id: "3", name: "Masala Dosa", price: "", quantity: 2 },
                    { category_id: "e40", cover: "assets/samosa.jpg", desc: "Spicy samosa", id: "4", name: "Aloo Samosa", price: "", quantity: 5 }
                ],
                paid: "COD",
                restaurant: {
                    name: "XYZ Hotel",
                    address: "78, Park Street, Kolkata, West Bengal 700016, India",
                    city: "Kolkata",
                    closeTime: "22:30",
                    cover: "assets/img2.jpg",
                    cuisines: "South Indian"
                },
                restaurant_id: "2",
                status: "Delivered",
                time: "Mar 5, 2024 12:45 PM",
                total: "435.00",
                user_id: "456"
                
            },
            {
                address: {
                    address: "89, Cyber City, Gurgaon, Haryana 122002, India",
                    house: "House 30",
                    id: "order3",
                    landmark:  "HP Petroleum", 
                    lat: 25.443353353,
                    lng: 29.222131313,
                    title: "Momin HP Petroleum",
                    user_id: "3"
                },
                deliveryCharge: 10,
                grandTotal: "360.00",
                id: "12332dsfhjf",
                order: [
                    { category_id: "e50", cover: "assets/paneer.jpg", desc: "Creamy paneer", id: "5", name: "Paneer Butter Masala", price: "", quantity: 1 }
                ],
                paid: "Online",
                restaurant: {
                    name: " Hotel",
                    address: "90, Cyber City, Gurgaon, Haryana 122002, India",
                    city: "Gurgaon",
                    closeTime: "21:00",
                    cover: "assets/img3.jpg",
                    cuisines: "North Indian"
                },
                restaurant_id: "3",
                status: "Delivered",
                time: "Mar 5, 2024 2:15 PM",
                total: "350.00",
                user_id: "789"
            }
        ];
        this.isLoading= false;
    }, 2000)
    
  }

}
