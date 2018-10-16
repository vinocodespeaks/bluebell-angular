import { Component, OnInit ,AfterViewInit} from '@angular/core';
import * as $ from "jquery"
import anime from 'animejs';
import { WOW } from 'wowjs/dist/wow.min'
declare var $:any;
@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.css']
})
export class WorkWithUsComponent implements OnInit,AfterViewInit{

  constructor() { }

  ngOnInit() {
  
    var open = false;

    $(document).ready(function () {

        console.log(open);
    

        $("body").tooltip({
          selector: "[data-toggle='tooltip']",
          container: "body"
      });
  
      $("body").popover({
              selector: "[data-toggle='popover']",
              container: "body",
              html: true
          });
  
      $(function () {
          $('[data-toggle="tooltip"]').tooltip()
      });
  
      $(function () {
          $('[data-toggle="popover"]').popover()
      });

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
  
ngAfterViewInit(){
  new WOW().init()
}
}
