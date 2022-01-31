import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Service/dataservice';



@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public Data: any;
  public CurentCondition: any;
  public date: Date = new Date();  
  public lasthost=this.date.getHours()-1+'H00';
  public nexthost=this.date.getHours()+1+'H00';
  curentData={
    condition: '',
    condition_key: '',
    date: '',
    hour: '',
    humidity: '',
    icon: '',
    icon_big: '',
    pressure: '',
    tmp: '',
    wnd_dir: '',
    wnd_gust: '',
    wnd_spd: ''
  }
  nexthourData={
    condition: '',
    condition_key: '',
    date: '',
    hour: '',
    humidity: '',
    icon: '',
    icon_big: '',
    pressure: '',
    tmp: '',
    wnd_dir: '',
    wnd_gust: '',
    wnd_spd: ''
  }
  lasthourData={
    condition: '',
    condition_key: '',
    date: '',
    hour: '',
    humidity: '',
    icon: '',
    icon_big: '',
    pressure: '',
    tmp: '',
    wnd_dir: '',
    wnd_gust: '',
    wnd_spd: ''
  }
  nextcurentData={
    condition: '',
    day_long: '',
    tmax: '',
    tmin: '',
    icon_big: '',
   
  }
next2curentData={
    condition: '',
    day_long: '',
    tmax: '',
    tmin: '',
    icon_big: '',
   
  }
next3curentData={
    condition: '',
    day_long: '',
    tmax: '',
    tmin: '',
    icon_big: '',
   
  }
next4curentData={
    condition: '',
    day_long: '',
    tmax: '',
    tmin: '',
    icon_big: '',
   
  }

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) {
    this.getData();
  }
  
  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  getData(){
    this.dataService.GetByCity('limoges')
    .subscribe((res)  => {
      this.Data= res;
      console.log(this.Data.fcst_day_0);
      console.log(this.Data.current_condition);
      this.curentData.condition=this.Data.current_condition.condition;
      this.curentData.condition_key=this.Data.current_condition.condition_key;
      this.curentData.date=this.Data.current_condition.date;
      this.curentData.hour=this.Data.current_condition.hour;
      this.curentData.humidity=this.Data.current_condition.humidity;
      this.curentData.icon=this.Data.current_condition.icon;
      this.curentData.icon_big=this.Data.current_condition.icon_big;
      this.curentData.pressure=this.Data.current_condition.pressure;
      this.curentData.tmp=this.Data.current_condition.tmp;
      this.curentData.wnd_dir=this.Data.current_condition.wnd_dir;
      this.curentData.wnd_gust=this.Data.current_condition.wnd_gust;
      this.curentData.wnd_spd=this.Data.current_condition.wnd_spd;
      
      this.nextcurentData.condition=this.Data.fcst_day_1.condition;
      this.nextcurentData.day_long=this.Data.fcst_day_1.day_long;
      this.nextcurentData.icon_big=this.Data.fcst_day_1.icon_big;
      this.nextcurentData.tmax=this.Data.fcst_day_1.tmax;
      this.nextcurentData.tmin=this.Data.fcst_day_1.tmin;

this.next2curentData.condition=this.Data.fcst_day_2.condition;
this.next2curentData.day_long=this.Data.fcst_day_2.day_long;
      this.next2curentData.icon_big=this.Data.fcst_day_2.icon_big;
      this.next2curentData.tmax=this.Data.fcst_day_2.tmax;
      this.next2curentData.tmin=this.Data.fcst_day_2.tmin;

this.next3curentData.condition=this.Data.fcst_day_3.condition;
this.next3curentData.day_long=this.Data.fcst_day_3.day_long;
      this.next3curentData.icon_big=this.Data.fcst_day_3.icon_big;
      this.next3curentData.tmax=this.Data.fcst_day_3.tmax;
      this.next3curentData.tmin=this.Data.fcst_day_3.tmin;

this.next4curentData.condition=this.Data.fcst_day_4.condition;
this.next4curentData.day_long=this.Data.fcst_day_4.day_long;
      this.next4curentData.icon_big=this.Data.fcst_day_4.icon_big;
      this.next4curentData.tmax=this.Data.fcst_day_4.tmax;
      this.next4curentData.tmin=this.Data.fcst_day_4.tmin;

      this.lasthourData.condition=this.Data.current_condition.condition;
      this.lasthourData.condition_key=this.Data.current_condition.condition_key;
      this.lasthourData.date=this.Data.current_condition.date;
      this.lasthourData.hour=this.Data.current_condition.hour;
      this.lasthourData.humidity=this.Data.current_condition.humidity;
      this.lasthourData.icon=this.Data.current_condition.icon;
      this.lasthourData.icon_big=this.Data.current_condition.icon_big;
      this.lasthourData.pressure=this.Data.current_condition.pressure;
      this.lasthourData.tmp=this.Data.current_condition.tmp;
      this.lasthourData.wnd_dir=this.Data.current_condition.wnd_dir;
      this.lasthourData.wnd_gust=this.Data.current_condition.wnd_gust;
      this.lasthourData.wnd_spd=this.Data.current_condition.wnd_spd;
      
      this.nexthourData.condition=this.Data.current_condition.condition;
      this.nexthourData.condition_key=this.Data.current_condition.condition_key;
      this.nexthourData.date=this.Data.current_condition.date;
      this.nexthourData.hour=this.Data.current_condition.hour;
      this.nexthourData.humidity=this.Data.current_condition.humidity;
      this.nexthourData.icon=this.Data.current_condition.icon;
      this.nexthourData.icon_big=this.Data.current_condition.icon_big;
      this.nexthourData.pressure=this.Data.current_condition.pressure;
      this.nexthourData.tmp=this.Data.current_condition.tmp;
      this.nexthourData.wnd_dir=this.Data.current_condition.wnd_dir;
      this.nexthourData.wnd_gust=this.Data.current_condition.wnd_gust;
      this.nexthourData.wnd_spd=this.Data.current_condition.wnd_spd;
      
      
      } );
    
    
  }
  getName(name: string){
    if (this.folder==name) {
      return true;
    }
    return false;
  }
    
  }
