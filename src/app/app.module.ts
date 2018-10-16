
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { IndexComponent } from './index/index.component';
import { OurApproachComponent } from './our-approach/our-approach.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WeOfferComponent } from './we-offer/we-offer.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';
import { AgmCoreModule} from "@agm/core"
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HashLocationStrategy ,LocationStrategy,PathLocationStrategy} from "@angular/common"
//angular router
import {Routes,RouterModule} from "@angular/router"
import {MyOwnCustomMaterialModule} from "./material"
//assign component to each  Routes
//app routes is Routes class object instance ,Routes is the class belongs to Angular Routes
const  appRoutes:Routes =[
{path:"" ,component:IndexComponent},
{path:"our-approach" ,component:OurApproachComponent},
{path:"under-construction" ,component:TimelineComponent},
{path:"we-offer" ,component:WeOfferComponent},
{path:"work-with-us" ,component:WorkWithUsComponent},
{path:"contact" ,component:ContactComponent}
]
@NgModule({
 // imports:[BrowserModule,],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
     // NgbModule,
    ContactComponent,
    IndexComponent,
    OurApproachComponent,
    TimelineComponent,
    WeOfferComponent,
    WorkWithUsComponent
  ],
  //module import
  // after setting path register the detail in AngularRouter using RouteModeule class
  imports: [
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyD37UizytAiQ7AefQr-4WqfcWFa6FZajw0'
    }),
  //  MatProgressSpinnerModule,
 
    BrowserAnimationsModule,
    BrowserModule,
    MyOwnCustomMaterialModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration: 'enabled'})
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
