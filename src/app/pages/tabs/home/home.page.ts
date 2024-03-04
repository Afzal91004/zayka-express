import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  banners: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(()=>{
      this.banners = [
        {banner: "assets/img2.jpg"},
        {banner: "assets/img1.jpg"},
        {banner: "assets/img3.jpg"}
      ];
      
      this.restaurants = [
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
          distance: 2.5,
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
          distance: 1.5,
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
          distance: 3.5,
          price: 700
        },
      ];

      this.isLoading = false;
    }, 1800)
  }

}
