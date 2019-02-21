import{Component, ViewChild, ElementRef} from '@angular/core';
import{NavController, Platform} from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl:  'home.page.html'
})
export class HomePage{

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(
    public navCtrl: NavController,
    privite platform: Platform
  ){
    platform.ready().then(()=>{
      this.initMap();
    })
    }

    initMap(){
      var happycode = {
        lat: -23.625183,
        lng: -46.737448
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement,{
        zoom: 16,
        center: happycode,
        disableDefaultUI: true
      });
      var market = new google.maps.Marker({
        position: happycode,
        map: this.map,
        title: 'My Position!'
      });
    }
  }