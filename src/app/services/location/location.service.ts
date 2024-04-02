import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

  async getCurrentLocation(){
    if(!Capacitor.isPluginAvailable('Geolocation')) {
      throw new Error('Geolocation plugin is not available');
    }
    const options: PositionOptions = {
      maximumAge: 3000,
      timeout: 10000,
      enableHighAccuracy: false
    }
    return await Geolocation.getCurrentPosition();
  }
}
