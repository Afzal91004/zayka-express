import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  banners = [
    {banner: "assets/img2.jpg"},
    {banner: "assets/img1.jpg"},
    {banner: "assets/img3.jpg"}
  ];
  
  restaurants = [
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

  allRestaurants = [
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

  restaurants1 = [
    {
      uid: '123abc',
      cover: 'assets/img1.jpg',
      name: 'abc hotel',
      short_name: 'abc',
      address: 'Allahabad, UP',
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
      address: 'kurla, Mumbai',
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
      address: 'Mumbra, Thanes',
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

  categories = [
    {
      id: "e00",
      name: "Italian",
      uid: '123abc'
    },
    {
      id: "e000",
      name: "Mexican",
      uid: '12wefdss'
    },
    {
      id: "e0",
      name: "Indian",
      uid: '12wefdss'
    },
    {
      id: "e0000",
      name: "South Indian",
      uid: '789pqr',
    },
    {
      id: "e00000",
      name: "Lucknowi",
      uid: '789pqr',
    },
  ]

  allItems = [
    {
      category_id: "e0",
      cover: "assets/paneerpizza.jpg",
      desc: "Great in taste",
      id: "i1",
      name: 'Paneer Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: "456xyz",
      variation: false,
      veg: true
    },
    {
      category_id: "e00",
      cover: "assets/cutlet.jpeg",
      desc: "Great in taste cbjfvbv erggrrgrg  errgreg errgrgr rrg fewckgjkkuvfbybkyngkjb,yvbkyjmjy vbguykj yvgbjhmtkuvbtjy kbyuk vybhckbvrvr vrwecucdrbkuvfbewrv hrhcrjcerbjcdrmcwer bcvder kgrucgukjcdrfcdrerc",
      id: "i2",
      name: 'chicken cutlet',
      price: 150.54,
      rating: 2,
      status: true,
      uid: "123abc",
      variation: false,
      veg: false
    },
    {
      category_id: "e00",
      cover: "assets/pizza.jpg",
      desc: "best in taste",
      id: "i3",
      name: 'Non-veg Pizza',
      price: 120,
      rating: 0,
      status: true,
      uid: "123abc",
      variation: false,
      veg: false
    },
    {
      category_id: "e00000",
      cover: "assets/whitepasta.jpeg ",
      desc: "delicious in taste",
      id: "i4",
      name: 'White Sauce Pasta',
      price: 150,
      rating: 2,
      status: true,
      uid: "789pqr",
      variation: false,
      veg: true
    },
    {
      category_id: "e0",
      cover: "assets/pizza.jpg",
      desc: "Great in taste",
      id: "i5",
      name: 'Pizza8',
      price: 120,
      rating: 0,
      status: true,
      uid: "343ccf",
      variation: false,
      veg: true
    },
    {
      category_id: "e00",
      cover: "assets/cutlet.jpeg",
      desc: "Great in taste",
      id: "i6",
      name: 'egg cutlet',
      price: 150,
      rating: 2,
      status: true,
      uid: "4355fe",
      variation: false,
      veg: true
    },
  ]

  constructor() { }
}
