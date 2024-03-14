import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _orders = new BehaviorSubject<Order[]>([]);

  get orders() {
    return this._orders.asObservable();
  }

  constructor(private api: ApiService) { }

  getOrders() {
    try {
      const orders = this.api.orders;
      console.log('orders', orders);
      this._orders.next(orders);
    } catch(e) {
      throw(e);
    }
  }

  placeOrder(param) {
    try {
      param.user_id = '1';
      // param.order = JSON.stringify(param.order);
      // param.order = JSON.parse(param.order);
      param.id = '5aG0RsPuze8NX00B7uE2';
      // let currentOrders = this._orders.value;
      let currentOrders: Order[] = [];
      currentOrders.push(new Order(
        param.address,
        param.restaurant,
        param.restaurant_id,
        param.order,
        param.total,
        param.grandTotal,
        param.deliveryCharge,
        param.status,
        // param.payment_status,
        // param.payment_mode,
        param.time, 
        param.paid,
        param.id, 
        param.user_id,
        param.instruction
      ));
      currentOrders =currentOrders.concat(this._orders.value);
      this._orders.next(currentOrders);
    } catch(e) {
      throw(e);
    }
  }

}
