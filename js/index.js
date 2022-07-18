//navbar area starts from here//
$(window).scroll(function(){
    $(".navbar").toggleClass('scrolled' , $(this). scrollTop()>100);
});
// navbar area ends from here

//text effect area starts from here
var typed = new Typed('.title', {
    strings: ["Web Developer.", "Wordpress Developer" , "Digital Marketer"],
    typeSpeed: 100,
    loop: true
  });
//text effect area ends here

//todo area starts from here
$(".btn").click(function(){
    var input =  $(".input").val ();
    var NewText = $("#ul").append('<li>'+input+'<i id="fa" class="fa-solid fa-trash-can"></i>'+'</li>');
});

//todo area starts from here
$("ul").on('click','#fa',function(){
    $(this).parent().hide();
});
//todo area ends here

//barchart area starts from here
window.onload = function(){
    var option = {
        title: {
            text: "Bar chart last 5 years"
        },
        axisY: {
            title: "Yearly value parcent %"
        },
        axisX: {
            title: "Year with month"
        },
        data:[
            {
                type: "column",
                dataPoints:[
                    {label:"January 2010",y:60},
                    {label:"January 2011",y:40},
                    {label:"January 2012",y:70},
                    {label:"January 2013",y:67},
                    {label:"January 2014",y:87},
                    {label:"January 2015",y:58},
                ]
            }
        ]
    };
    $("#chartContainer").CanvasJSChart(option);
}
//barchart area ends here

//counterUp starts from here
$(".count").counterUp({
    time:1000
})
//counterUp ends here

//slider area starts from here
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    padding:10,
    margin:10,
    autoplayHoverPause:true,
    animateOut:'slideOutUp',
    AnimateIn: 'slideInUp',

    responsive : {
        0:{
            items:1
        },
        600: {
            items:3
        },
        1000:{
            items:4
        }
    }
});
//slider area ends here


//wowjs starts from here
new WOW().init();
//wowjs ends here