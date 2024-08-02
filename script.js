const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function MouseFollow() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".mouse-circle"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}

// yeh animation dene ke liye ha gsap
function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from(".nav", {
    y: "-10",
    duration: 1.5,
    opacity: 0,
    ease: "expo",
  })
    .to("#boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from(".last-head", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

MouseFollow();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function (elem) {
  elem.addEventListener("mousemove", function (details) {
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power1
    });
  });
});
