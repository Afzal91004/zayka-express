import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { NavController } from '@ionic/angular';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  veg: boolean;
  isLoading: boolean;
  cartData: any= {} ;
  storedData: any = {};
  model = {
    icon: 'fast-food-outline',
    title: 'No Menu Available'
  };
  restaurants = [
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

  categories: any[] = [
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

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap=>{
      console.log('data: ', paramMap);
      if(!paramMap.has('restaurantId')){
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  getCart(){
    return Preferences.get({key: 'cart'});
  }

  async getItems(){
    this.isLoading = true;
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    setTimeout(async () => {
      let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    this.categories = this.categories.filter(x => x.uid === this.id)
    this.items = this.allItems.filter(x => x.uid === this.id);
    console.log('restaurant: ',this.data);
    let cart: any = await this.getCart();
    console.log('cart: ', cart);
    if(cart?.value){
      this.storedData = JSON.parse(cart.value);
      console.log('storedData: ', this.storedData);
      if(this.id == this.storedData.restaurant.uid && this.allItems.length > 0){
        this.allItems.forEach((element: any) => {
          this.storedData.items.forEach(ele => {
            if(element.id != ele.id) return;
            element.quantity = ele.quantity
          })
        })
      }
      this.cartData.totalItem = this.storedData.totalItems;
      this.cartData.totalPrice = this.storedData.totalPrice;
    }
    this.isLoading = false;
    }, 2000)
  }

  getCuisine(cuisine){
    return cuisine.join(', ');
  }

  vegOnly(event){
    console.log(!event.detail.checked);
    this.items = [];
    if(event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);
    else this.items = this.allItems;
    console.log('items: ', this.items)
  }

  quantityPlus(index){
    try{
      console.log(this.items[index]);
      if (!this.items[index].quantity || this.items[index].quantity == 0){
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1;
        this.calculate();
      }
    } catch(e){
      console.log(e);
    }
  }

  quantityMinus(index){
    if(this.items[index].quantity !== 0){
      this.items[index].quantity -= 1;
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }
  
  calculate() {
    console.log(this.items)
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0);
    console.log('added items: ', item);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if(this.cartData.totalItem == 0){
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
    console.log(this.cartData);
  }

  async saveToCart(){
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      console.log(this.cartData);
      await Preferences.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      })
    } catch (e){
      console.log(e);
    }
  }

  async viewCart(){
    if(this.cartData.items && this.cartData.items.length > 0) await this.saveToCart();
    console.log('router utl: ', this.router.url);
    this.router.navigate([this.router.url + '/cart']);

  }
}
