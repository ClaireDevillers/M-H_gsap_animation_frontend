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
        
        const bg = document.getElementById("BG")
        const bulleRouge = document.getElementById("Bulle_Rouge")
        const bulleBlanche = document.getElementById("Bulle_Blanche")
        const bulleNoire = document.getElementById("Bulle_Exclusivite_-_EN")
        const bulleBleue = document.getElementById("CTA_-_EN")
        const iga = document.getElementById("IGA_seul_RGB_Image")
        const can1 = document.getElementById("Atypique_Gin_Tonic_Image")
        const can2 = document.getElementById("Atypique_Spritz_Image")
        const can3 = document.getElementById("Atypique_Mojito_Image")

        tl.from(bg, {opacity: 0, ease: "back", scale: 0.0001})
        tl.from(bulleRouge, {opacity: 0, ease: "elastic", yPercent: +50, duration: 3})
        tl.from(can1, {opacity: 0, scale: 0.0001, rotation: -360*5, duration: 0.8}, "-=2")
        tl.to(can2, {opacity: 1, xPercent: -50, duration:1})
        tl.to(can3, {opacity: 1, xPercent: 47, duration:2}, "<")
        tl.from(bulleBlanche, {opacity: 0, ease: "elastic", yPercent: 50, duration:3})
        tl.to([bulleRouge, bulleBlanche, bg], {opacity: 0})
        tl.to([can1, can2, can3], {yPercent:-20,duration:0.7})
        tl.fromTo(bulleNoire, {opacity:0, xPercent:90}, {opacity:1, yPercent:-200, duration:3})
        tl.to(bulleNoire, {opacity:0})
        tl.fromTo(bulleBleue, {opacity:0, xPercent: 80}, {yPercent:-780,opacity:1})
        tl.fromTo(iga, {opacity:0, xPercent: -140}, {opacity:1,duration:5})
        
    /* ***** End Coding Here ***** */
}