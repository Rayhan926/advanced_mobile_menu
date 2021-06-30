var tl = gsap.timeline();

tl.to(".mobile_nav_wrap", {
  width: "100%",
  duration: 0.2,
  ease: Power0.easeInOut,
})
  .to(".staring_wrap", {
    height: 0,
    duration: 0.6,
    ease: Power0.easeInOut,
    stagger: 0.1,
  })
  .to(
    ".ending_wrap",
    {
      height: 0,
      duration: 0.4,
      ease: Power0.easeInOut,
    },
    "-=0.2"
  );

tl.pause();
var hamburger = document.querySelector(".hamburger_icon_wrap");
var bolian = true;
hamburger.addEventListener("click", () => {
  if (bolian == true) {
    tl.play();
    bolian = false;
  } else {
    tl.reverse(1);
    bolian = true;
  }
  document.querySelector(".hamburger_icon_wrap i").classList.toggle("fa-times");
});




