


// to do nav bar hidden and
var menulist = document.getElementById('menulist');

menulist.style.maxHeight = "0px";

function menuToggle(){

    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "100vh";
    }
    else{
        menulist.style.maxHeight = "0px"
    }
}



// to home
$('.owl-carousel2').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText:["<i class = 'fa fa-chevron-left'></li>" , "<i class = 'fa fa-chevron-right'></li>" ],
    responsive:{
        0:{
            items:1
        },
        758:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


//to rooms
$('.owl-carousel3').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    navText:["<i class = 'fa fa-chevron-left'></li>" , "<i class = 'fa fa-chevron-right'></li>" ],
    responsive:{
        0:{
            items:1
        },
        758:{
            items:2,
            margin:10,
        },
        1000:{
            items:3
        }
    }
})


//to gallery
$('.owl-carousel4').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    navText:["<i class = 'fa fa-chevron-left'></li>" , "<i class = 'fa fa-chevron-right'></li>" ],
    responsive:{
        0:{
            items:1
        },
        758:{
            items:4
        },
        1000:{
            items:6
        }
    }
})

//to customer
$('.owl-carousel5').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    navText:["<i class = 'fa fa-chevron-left'></li>" , "<i class = 'fa fa-chevron-right'></li>" ],
    responsive:{
        0:{
            items:1
        },
        758:{
            items:1
        },
        1000:{
            items:1
        }
    }
})





