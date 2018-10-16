import { Component, OnInit,AfterViewInit} from '@angular/core';
//import { WOW } from 'wow.min'
import * as $ from "jquery"
import anime from 'animejs';
import { WOW } from 'wowjs/dist/wow.min'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit,AfterViewInit{
latitude=35.831919
longitude=-78.861212
  constructor() { }
//lifecycle of component 
 ngOnInit() {
  //   var googleMapsClient = require('@google/maps').createClient({
  //     key: 'your API key here'
  //   });
    // function initMap() {
    //   var uluru = { lat: 35.831919, lng: c };
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 15,
    //       center: uluru
    //   });
    //   var marker = new google.maps.Marker({
    //       position: uluru,
    //       map: map
    //   });
      var open = false;

$(document).ready(function () {
    console.log(open);

    $("#MenuIcon").click(function () {
        open = true;
        console.log("Menu Icon Clicked", open);
        $("#MainMenu").css("left", "0px");

        function showMenu() {
            $("#MainMenu").css("-webkit-clip-path", "polygon(0 0,100% 0,100% 100%,0% 100%)");
            $("#MenuIcon").animate({
                right: '-100'
            }, 300);
        }
        setTimeout(showMenu, 100);
        $("#MenuIcon").hide();
    });

    $("#close").click(function () {
        open = false;
        $("#MainMenu").css("-webkit-clip-path", "polygon(0 0,0% 0,100% 100%,0% 100%)");

        function hideMenu() {
            $("#MainMenu").css("left", "-300px");
            $("#MenuIcon").animate({
                right: '50'
            }, 300);
        }
        setTimeout(hideMenu, 300);

        function originalLayout() {
        $("#MenuIcon").show();            
        $("#MainMenu").css("-webkit-clip-path", "polygon(0 0,100% 0,0% 100%,0% 100%)");
        }
        setTimeout(originalLayout, 600);
    });

})

  }


  
  //lifecycle  of view
  //after view in initialized this would be called 
ngAfterViewInit(){
  new WOW().init()
}
}