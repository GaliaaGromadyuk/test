
$('.slider-first').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  slide: ".slider__item",
  prevArrow: ".slider-first .slider__prev",
  nextArrow: ".slider-first .slider__next",
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        autoplay: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: false,
        arrows: false
      }
    }
  ]
});

$('.slider-second').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  slide: ".slider__item",
  prevArrow: ".slider-second .slider__prev",
  nextArrow: ".slider-second .slider__next",
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        autoplay: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: false,
        arrows: false
      }
    }
  ]
});


$('.slider-third').slick({
  dots: true,
  speed: 300,
  slidesToShow: 1,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  slide: ".slider__item",
  prevArrow: ".slider-third .slider__prev",
  nextArrow: ".slider-third .slider__next",
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        autoplay: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: false,
        arrows: false
      }
    }
  ]
});

$('.slider-fourth').slick({
  dots: false,
  speed: 300,
  slidesToShow: 1,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  slide: ".slider__item",
  prevArrow: ".slider-fourth .slider__prev",
  nextArrow: ".slider-fourth .slider__next",
    responsive: [
    {
      breakpoint: 1025,
      settings: {
        autoplay: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        autoplay: false,
        arrows: false
      }
    }
  ]
});

    var ukrCord = {
      lat:50.436768,
      lng:30.327901
    }
    var kli1 = {
      lat:50.432804 ,
      lng:30.329885
    }
    var dit2 = {
      lat:50.432312 ,
      lng:30.332192
    }
    var spo3 = {
      lat:50.433638 ,
      lng:30.333136
    }
    var zup4 = {
      lat: 50.434054,
      lng: 30.330221
    }
    var mag5 = {
      lat: 50.433959,
      lng:30.330048
    }
    var dit6 = {
      lat:50.434314 ,
      lng:30.328013
    }
    var spo7 = {
      lat: 50.434206,
      lng:30.321081
    }
    var mag8 = {
      lat: 50.434418,
      lng:30.318900
    }
    var zup9 = {
      lat: 50.432583,
      lng: 30.322183
    }
    var np10 = {
      lat: 50.438494,
      lng: 30.339748
    }
    var sho1 = {
      lat: 50.436362,
      lng:30.341324
    }
    var bus12 = {
      lat: 50.435938,
      lng: 30.343255
    }
     var mag13 = {
      lat: 50.429059,
      lng:30.356057
    }
    var mag14 = {
      lat: 50.436493,
      lng: 30.357884
    }
    var mag15 = {
      lat: 50.439461,
      lng: 30.353810
    }

var map;
    function initMap() {
      var directionsService = new google.maps.DirectionsService();
      // directionsDisplay.setMap(map);
      // directionsDisplay.setOptions( { suppressMarkers: true } );


      map = new google.maps.Map(document.getElementById('map'), {
        center: ukrCord,
        zoom:15,
        disableDefaultUI: true,
        styles: [
          {
            "featureType": "landscape",
            "elementType": "labels",
            "stylers": [
              { "visibility": "off" }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              { "visibility": "off" }
            ]
          }
        ]
      });
      // directionsDisplay.setMap(map);

      var start_point = new google.maps.LatLng(50.432470, 30.325121);
      var end_point = new google.maps.LatLng(50.455867, 30.364593);
      

      var kliimg = "../img/kli.png";
      var ditimg = "../img/dit.png";
      var spoimg = "../img/spo.png";
      var zupimg = "../img/zup.png";
      var magimg = "../img/mag.png";
      var npimg = "../img/np.png";
      var shoimg = "../img/sho.png";
      var busimg = "../img/bus.png";
      var muller = "../img/MUller_Location.png";

      var markers = [
        [start_point, muller, 90, -50, '5км до метро', "green", "0.9rem"],
        [kli1, kliimg, 25, 75, 'Клініка'],
        [dit2, ditimg, 25, 75, 'Дитсадок'],
        [spo3, spoimg, 80, 30, 'Спортзал'],
        [zup4, zupimg, 65, 10, '№747'],
        [mag5, magimg, 25, 75, 'ТРЦ Аметист Молл'],
        [dit6, ditimg, -30, 10, 'Дитсадок'],
        [spo7, spoimg, 25, 75, 'Спортзал'],
        [mag8, magimg, -40, 30, 'Супермаркет'],
        [zup9, zupimg, 25, 75, '№903'],
        [np10, npimg, 25, 75, 'Нова пошта'],
        [sho1, shoimg, 25, 75, 'Школа'],
        [bus12, busimg, 25, 75, 'Байсейн'],
        [mag13, magimg, 25, 75, 'Ашан'],
        [mag14, magimg, 25, 75, 'BILLA'],
        [mag15, magimg, 25, 75, 'Епіцентр']
      ]

      var marker = [];
      var i;

      for (i = 0; i < markers.length; i++) {  
        marker[i] = new google.maps.Marker({
          draggable: false,
          optimized:false,
          position: markers[i][0],
          map: map,
          optimized:false,
          icon:{
            labelOrigin: new google.maps.Point(markers[i][2],markers[i][3]),
            url: markers[i][1]
          },
          label: {
            text: markers[i][4],
            color: "black",
            fontSize: "0.7rem"
          }
        });

        var bounceTimer;

        google.maps.event.addListener(marker[i], 'mouseover', function() {
              if (this.getAnimation() == null || typeof this.getAnimation() === 'undefined') {
                  
                  clearTimeout(bounceTimer);
                  
                  var that = this;
                   
                  bounceTimer = setTimeout(function(){
                       that.setAnimation(google.maps.Animation.BOUNCE);
                  },
                  200);
       
              }
          });
          
          google.maps.event.addListener(marker[i], 'mouseout', function() {
              
               if (this.getAnimation() != null) {
                  this.setAnimation(null);
               }
               
               clearTimeout(bounceTimer);
              
          });
      };


      

       
      var request = {
       origin: start_point,
       destination: end_point,
       travelMode: google.maps.TravelMode.DRIVING,
      };
      directionsService.route(request, function(response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              directionsDisplay.setOptions({ preserveViewport: true });
              directionsDisplay.setDirections(response);
          }
      });
       var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 1,
        scale: 3
    };

    var polylineDotted = {
        strokeColor: '#e8402b',
        strokeOpacity: 0,
        fillOpacity: 0,
        icons: [{
            icon: lineSymbol,
            offset: '0',
            repeat: '10px'
        }],
    };

    var rendererOptions = {
        map: map,
        suppressMarkers: true,
        polylineOptions: polylineDotted
    };

    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
};





    $(".menu").on("click","a", function (event) {
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


$(document).ready(function(){   
    // $('.to-top').click(function () {
    //     $('body,html').animate({
    //         scrollTop: 0
    //     }, 400);
    //     return false;
    // });

    new fullpage('#fullpage', {
      anchors:['Home', 'Bonefits', 'Maps', 'Infrastructure', 'Apartments', 'Developer', 'Construction', 'Footer'],
    });

    //methods
    // $.fn.fullpage.setAllowScrolling(false);
});

$(document).ready(function() {
  $('.completion__btn').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){ 
        $('.popup__completion') 
          .css('display', 'flex') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  $('.modal_close, #overlay').click( function(){
    $('.popup__completion').animate({opacity: 0, top: '45%'}, 200, 
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400);
        }
      );
  });
  $('.document__btn').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){ 
        $('.popup__document') 
          .css('display', 'flex') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  $('.modal_close, #overlay').click( function(){
    $('.popup__document').animate({opacity: 0, top: '45%'}, 200, 
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400);
        }
      );
  });
  $('.video__btn').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){ 
        $('.popup__video') 
          .css('display', 'flex') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  $('.modal_close, #overlay').click( function(){
    $('.popup__video').animate({opacity: 0, top: '45%'}, 200, 
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400);
        }
      );
  });
    $('.buttons__order, .call, .price, .footer__call').click( function(event){
    event.preventDefault();
    $('#overlay').fadeIn(400,
      function(){ 
        $('.popup__call') 
          .css('display', 'flex') 
          .animate({opacity: 1, top: '50%'}, 200); 
    });
  });
  $('.modal_close, #overlay').click( function(){
    $('.popup__call').animate({opacity: 0, top: '45%'}, 200, 
        function(){ 
          $(this).css('display', 'none'); 
          $('#overlay').fadeOut(400);
        }
      );
  });
   $('.menu__icon').click( function(event){
      event.preventDefault();
      $('.mob__menu').css('display', 'block').animate({opacity: 1}, 200); 
  });
  $('.modal_close-p, .mob__menu ul a').click( function(){
    $('.mob__menu').css('display', 'none').animate({opacity: 0}, 200);
  });

});