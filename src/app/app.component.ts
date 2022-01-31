import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Last hour', url: '/folder/Lasthour', icon: 'arrow-undo' },
    { title: 'Next hour', url: '/folder/Nexthour', icon: 'arrow-redo' },
    { title: 'Next 4 days', url: '/folder/Next4days', icon: 'arrow-forward' },
    { title: 'information', url: '/folder/Information', icon: 'information' }
  ];
  constructor() {}
  yourInputChangeFunction(event){
    console.log(event);
  }
}
