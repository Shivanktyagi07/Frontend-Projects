const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});  
  
var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 1,
  });
});
videocon.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  });
});
document.addEventListener("mousemove", function (dets) {
    gsap.to(playbtn, {
      left: dets.x ,
      top: dets.y ,
    });
  });

  function loadinganimation() {
    gsap.from("#page1 h1", {
      y: 25,
      opacity: 0,
      delay: 0.5,
      duration: 0.9,
      stagger: 0.3,
    });
    gsap.from("#page1 #video-container", {
      scale: 0.9,
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
    });
  }
  loadinganimation();