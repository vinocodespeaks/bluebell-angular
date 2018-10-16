import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  state,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import {
  Router,
  // import as RouterEvent to avoid confusion with the DOM Event
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
//import {MatProgressBarModule} from '@angular/material/progress-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation', [
      // route 'enter' transition
      transition(':enter', [

          // styles at start of transition
          style({ opacity: 0 }),

          // animation and styles at end of transition
          animate('.3s', style({ opacity: 1 }))
      ]),
  ])
      ] // register the animations
    

})
export class AppComponent {
  latitude=35.831919
  longitude=-78.861212
  title = 'bluebell';
    // Sets initial value to true to show loading spinner on first load
    loading = true  
    color = 'primary';
  mode = 'determinate';
  value = 50;
    constructor(private router: Router) {
      router.events.subscribe((event: RouterEvent) => {
        this.navigationInterceptor(event)
      })
    }
  
    // Shows and hides the loading spinner during RouterEvent changes
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true
        console.log(this.loading+"routing ")
      }
      if (event instanceof NavigationEnd) {
        this.loading = false
        console.log(this.loading+"  routing end")
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loading = false
        console.log(this.loading+"routing canceld")
      }
      if (event instanceof NavigationError) {
        this.loading = false
        console.log(this.loading+"routing error")
      }
    }
  // public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }
}
