import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from "jquery"
import anime from 'animejs';
import { WOW } from 'wowjs/dist/wow.min'
// import carousel from "bootstrap"
declare var $:any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,AfterViewInit{
//   images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {

    var open = false;
//
    $(document).ready(function () {
        console.log("hola")
        console.log(open);
        $('#partner-carousel').carousel({
            interval: 3000,
            cycle: true
          }); 
//         $('#partner-carousel').carousel({
//             interval: 5000,
//             pause: "hover",
//             wrap: true
//         })
//         .on('click', '.carousel-control', handle_nav);

// var handle_nav = function(e) {
//     e.preventDefault();
//     var nav = $(this);
//     nav.parents('.carousel').carousel(nav.data('slide'));
// }
      
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
    if (wS > (hT + hH - wH) && (wS+wH > hT+hH)) {
        console.log('H1 on the view!');
        if (trig == 0) {
            $('#blue-bell-animation').css('display', 'block');

            var lineDrawing = anime({
                targets: '#lineDrawing .lines path',
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'easeInOutSine',
                duration: 3000,
                delay: (e, i) => i * 500
            });
            var textAnimation = anime({
                targets: '#lineDrawing text',
                opacity: [0, 1],
                easing: 'easeInOutSine',
                duration: 1500,
                delay: (e, i) => 1000 + i * 500
            });

            trig = 1;
        }
    }
});

    

  }
  // ngAfterViewInit(){
  //   new WOW().init()
  // }
  ngAfterViewInit(){
    new WOW().init()
  }

}