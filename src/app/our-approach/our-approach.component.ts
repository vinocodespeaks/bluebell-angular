import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery"
import anime from 'animejs';
import { WOW } from 'wowjs/dist/wow.min'
declare var $:any;
@Component({
  selector: 'app-our-approach',
  templateUrl: './our-approach.component.html',
  styleUrls: ['./our-approach.component.css']
})
export class OurApproachComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
    var open = false;

    $(document).ready(function () {
        console.log(open);
        $('#educational-visits-carousel').carousel({
            interval: 3000,
            cycle: true
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
    
    });
     var trig = 0;

$(window).scroll(function () {
    var hT = $('#animate-trigger').offset().top,
        hH = $('#animate-trigger').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (wS + wH > hT + hH)) {
        console.log('H1 on the view!');
        if (trig == 0) {
            $('#blue-bell-animation').css('display', 'block');

            var lineDrawing = anime({
                targets: '#lineDrawing .lines path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: (e, i) => (i == 0) ? 5000 : 4500,
                delay: (e, i) => i * 200
            });
            var textAnimation = anime({
                targets: '#lineDrawing text',
                opacity: [0, 1],
                easing: 'easeInOutSine',
                duration: 1000,
                delay: (e, i) => 200 + i * 200
            });

            trig = 1;
        }
    }
});

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
  }
  ngAfterViewInit(){
    new WOW().init()
  }

}
