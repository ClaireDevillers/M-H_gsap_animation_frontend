/* ********************************
********** Version : 2.0 **********
******************************** */
/* ***** References *****
Gsap - Getting Started : https://greensock.com/get-started/
Gsap - Ease Visualizer : https://greensock.com/ease-visualizer/
*/

/* ***** Function | Create Timeline ***** */
var tl;
function createTimeline(){
    // Gsap Timeline
    tl = gsap.timeline({
        repeat:1, // Number of Times the animation Repeat (0 = Play 1 time, 1 = Replay 1 time)
        repeatDelay:4, // Delay in "seconds" before the animation Loop
        onComplete: function(){
            /* ***** Timeline End ***** */
            document.getElementById("ad-container").className = "timeline-finished"; // AddClass "timeline-finished" to "#ad-container" (Hide the Replay Button)
        }
    });

    /* ***** JS Target Variables ***** */
    var contentBanner = document.querySelectorAll(".content-banner");
    
    

    /* ***** Base Gsap Timeline ***** */
    tl.to(contentBanner, {duration:0.6, autoAlpha:1, ease: "power2.out"});
    tl.addLabel("start");

    /* ***** Start Coding Here ***** */

        /* ***** Custom Gsap Timeline ***** */
        tl.addLabel("frame1");

        const bg = document.getElementById("BG")
        const bulleRouge = document.getElementById("Bulle_Rouge")
        const bulleBlanche = document.getElementById("Bulle_Blanche")
        const bulleNoire = document.getElementById("Bulle_Exclusivite_-_EN")
        const bulleBleue = document.getElementById("CTA_-_EN")
        const iga = document.getElementById("IGA_seul_RGB_Image")
        const can1 = document.getElementById("Atypique_Gin_Tonic_Image")
        const can2 = document.getElementById("Atypique_Spritz_Image")
        const can3 = document.getElementById("Atypique_Mojito_Image")

        //const all = [bg, bulleRouge, bulleBlanche, bulleNoire, bulleBleue, iga, can1, can2, can3]

        tl.from(bg, {opacity: 0, ease: "back", scale: 0.0001})
        tl.from(bulleRouge, {opacity: 0, ease: "elastic", yPercent: +50, duration: 3})
        tl.from(can1, {opacity: 0, scale: 0.0001, rotation: -360*5, duration: 0.8}, "-=2")
        tl.to(can2, {opacity: 1, xPercent: -50, duration:1})
        tl.to(can3, {opacity: 1, xPercent: 50, duration:2}, "<")
        tl.from(bulleBlanche, {opacity: 0, ease: "elastic", yPercent: 50, duration:3})
        tl.to([bulleRouge, bulleBlanche, bg], {opacity: 0})
        tl.fromTo(bulleNoire, {opacity:0, xPercent:90}, {opacity:1, yPercent:-180, duration:3})
        tl.to(bulleNoire, {opacity:0})
        tl.fromTo(bulleBleue, {opacity:0, xPercent: 80}, {yPercent:-780,opacity:1})
        tl.to([can1, can2, can3], {yPercent:-20,duration:0})
        tl.fromTo(iga, {opacity:0, xPercent: -150}, {opacity:1,duration:5})


        
        

        //tl.from("#BG", {scale: 0.0001,opacity: 3, ease: "elastic", stagger:0.8})
        //tl.from("#Bulle_Rouge", {y: "30%", ease: "elastic", display: "block"})


        //Examples Animation
        // example 1: bottom to top
        //tl.from("#BG", {duration:0.8, stagger:0.06, width:"80%", y:"30%", opacity:0, ease: "elastic.out(1, 0.75)"});
        //tl.addLabel("frame2", "+=0.6");

        // example 2: fade out
        //tl.to("#BG", {duration:0.6, opacity:0, ease: "power2.out"}, "frame2");

        //tl.addLabel("frame3", "+=0");

        // example 3: fade in
        //tl.to("#BG", {duration:0.6, opacity:1, ease: "power2.out"}, "frame3");
        //tl.to("#BG", {duration:0, opacity:1, ease: "power2.out"}, "-=0.4");
        
        // example 4: fade in and then out
        //tl.from("#Bulle_Rouge", {duration:0.5, opacity:0, ease: "power2.out"}, "-=0.4");
        //tl.from("#Bulle_Blanche", {duration:0.5, opacity:0, ease: "power2.out"}, "-=0.5");
        //tl.to(["#Bulle_Rouge", "#Bulle_Blanche"], {duration:0.4, opacity:0, ease: "power2.out"}, "+=1.6");

        //tl.addLabel("frame4", "+=0");

        // example 5: 2 fade in, 2 more fade in, all fade out
        // tl.to("#BG", {duration:0.6, opacity:1, ease: "power2.out"}, "frame4");
        // tl.to("#Bulle_Rouge", {duration:0, opacity:1, ease: "power2.out"}, "-=0.4");
        // tl.from("#Bulle_Blanche", {duration:0.5, opacity:0, ease: "power2.out"}, "-=0.4");
        // tl.from("#IGA_seul_RGB_Image", {duration:0.5, opacity:0, ease: "power2.out"}, "-=0.5");
        // tl.to(["#BG", "#Bulle_Rouge", "#Bulle_Blanche", "#IGA_seul_RGB_Image"], {duration:0.4, opacity:0, ease: "power2.out"}, "+=2");

        // tl.addLabel("frame5", "+=0");

        // tl.from("#Bulle_Rouge", {duration:0.8, scale:0, x:"-35%", y:"80%", opacity:0, ease: "elastic.out(1, 0.75)"});
        // tl.to("#BG", {duration:0.6, opacity:1, ease: "power2.out"}, "frame5+=0.2");
        // tl.to(["#BG", "#Bulle_Rouge"], {duration:0.6, opacity:1, ease: "power2.out"}, "frame5+=0.6");
        
        //END Examples Animation
        
    /* ***** End Coding Here ***** */
}