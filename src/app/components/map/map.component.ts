import { animation, style } from '@angular/animations';
import { MapType } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { elementAt, Subscription } from 'rxjs';
import { GoogleMapsService } from 'src/app/services/google-maps/google-maps.service';
import { LocationService } from 'src/app/services/location/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent  implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any; 
  map: any;
  marker: any;
  @Input() update = false;
  @Input() center: { lat: number, lng: number } = { lat: 19.1425428468017, lng: 73.03747910425842 };
  @Output() location: EventEmitter<any> = new EventEmitter();
  mapListener: any;
 
  constructor(
    private maps: GoogleMapsService,
    private renderer: Renderer2,
    private locationService: LocationService
    ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  async initMap(){
    try{
      if(!this.update){
        const position = await this.locationService.getCurrentLocation();
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        await this.loadMap();
        this.getAddress(this.center.lat, this.center.lng);
      } else {
        await this.loadMap();
      }
    } catch(e){
      console.log(e);
      this.loadMap();
      // this.getAddress(this.center.lat, this.center.lng);
    }
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps(); 
      this.googleMaps = googleMaps;
      const mapEl = this.mapElementRef.nativeElement;
      const location = new googleMaps.LatLng(this.center.lat, this.center.lng);
      this.map = new googleMaps.Map(mapEl, {
        center: location,
        zoom: 15,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        overViewControl: false,
        MapTypeControl: false,
        mapTypeControlOptions: {
          mapTypeId: [googleMaps.MapTypeId.RoadMap, 'ZaykaExpress']
        }
      });
      const style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            {saturation: -100}
          ]
        }
      ];
      var mapType = new googleMaps.StyledMapType(style, {name: 'Grayscale'});
      this.map.mapTypes.set('ZaykaExpress', mapType),
      this.map.setMapTypeId('ZaykaExpress');
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location);
    } catch (e) {
      console.log(e)
    }
  }

  addMarker(location){
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'assets/icons/location.pin.png',
      scaledSize: new googleMaps.Size(50, 50),
    };
    this.marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      icon: icon,
      draggable: true,
      animation: googleMaps.Animation.DROP
    });
    this.mapListener = this.googleMaps.event.addListener(this.marker, 'dragend', () => {
      this.getAddress(this.marker.position.lat(), this.marker.position.lng())
    })
  }

  async getAddress(lat, lng){
    try {
      const result: any = await this.maps.getAddress(lat, lng);
      console.log(result);
      const loc = {
        location_name: result.address_components[0].short_name,
        address: result.formatted_address,
        lat,
        lng
      }
      console.log(loc);
      this.location.emit(loc); 
    } catch(e){
      console.log(e);
    }
  }

  ngOnDestroy(): void {
    if(!this.mapListener) this.googleMaps.event.removeListener(this.mapListener)
  }

}
