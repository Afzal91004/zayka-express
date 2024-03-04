import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput: { setFocus: () => void; };
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  }
  isLoading: boolean;
  query: any;
  allRestaurants: any[] = [
    {
      uid: '123abc',
      cover: 'assets/img1.jpg',
      name: 'abc hotel',
      short_name: 'abc',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 100
    },
    {
      uid: '456xyz',
      cover: 'assets/img2.jpg',
      name: 'xyz hotel',
      short_name: 'xyz',
      cuisines: [
        'Indian',
        'Pakistani'
      ],
      rating: 5,
      delivery_time: 15,
      price: 900
    },
    {
      uid: '789pqr',
      cover: 'assets/img3.jpg',
      name: 'pqr hotel',
      short_name: 'pqr',
      cuisines: [
        'South Indian',
        'Lucknowi'
      ],
      rating: 5,
      delivery_time: 35,
      price: 700
    },
  ];

  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.sInput.setFocus();
    }, 500);
  }

  async onSearchChange(event){
    console.log(event.detail.value);
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0){
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await this.allRestaurants.filter((element: any) => {
          return element.short_name.includes(this.query);
        });
        console.log(this.restaurants);
        this.isLoading = false;
      }, 2000)
    }
  }

}
