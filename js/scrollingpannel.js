var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();

function toggleHref(divid)
{
    // console.log("switched: ", divid);
    if($(divid).attr('href').includes("end"))
    {
        $(divid).attr('href', $(divid).attr('href').substring(0, $(divid).attr('href').length-3))
    }
    else

    {
        $(divid).attr('href', $(divid).attr('href') + "end")
    }
}

const controller = new ScrollMagic.Controller();

tl.from("#about_firstline", 0.5, {x:150, opacity: 0});
tl.from("#about_secondline", 0.5, {x:150, opacity: 0});
tl.from("#about_thirdline", 0.5, {x:150, opacity: 0});
tl.from("#mepicture", 1, {x:-200, opacity:0}, "=-1");

tl2.from("#skillsleft", 0.5, {y:200, opacity:0});
tl2.from("#skillsmiddle", 0.5, {y:200, opacity:0});
tl2.from("#skillsright", 0.5, {y:200, opacity:0});

var cards = document.getElementsByClassName("work_card");
for (var i = 0; i < cards.length; i++) {
  tl3.from(cards[i], 0.2 ,{x:-1000, opacity:0});
}



new ScrollMagic.Scene({triggerElement: "#section1"})
                    .on("enter leave", () => {toggleHref("#section1click")})
					.setClassToggle("#navpage_1", "navigation_active") // add class toggle
                    .addTo(controller);
                    
new ScrollMagic.Scene({triggerElement: "#section2"})
                    .on("enter leave", () => {toggleHref("#section2click")})
					.setClassToggle("#navpage_2", "navigation_active") // add class toggle
                    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section3"})
                    .on("enter leave", () => {toggleHref("#section3click")})
					.setClassToggle("#navpage_3", "navigation_active") // add class toggle
                    .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#section4"})
                    .on("enter leave", () => {toggleHref("#section4click")})
					.setClassToggle("#navpage_4", "navigation_active") // add class toggle
                    .addTo(controller);

                    
const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",
  triggerHook: "onLeave", 
  duration: "100%"
})
  .setPin(".sticky")
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".sticky2",
  triggerHook: "onLeave", 
  duration: "100%"
})
  .setPin(".sticky2")
  .setTween(tl2)
    .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".sticky3",
  triggerHook: "onLeave", 
  duration: "100%"
})
.setPin(".sticky3")
.setTween(tl3)
  .addTo(controller);