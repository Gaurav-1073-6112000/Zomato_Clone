function locomotiveScrollCode() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#mainCtn"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#mainCtn", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#mainCtn").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

};

locomotiveScrollCode();

var timeLine = gsap.timeline();

timeLine
    .from("nav", {
        opacity: 0,
        translateY: "-40px",
        duration: 1,
        ease: Expo.easeInOut
    })

    .from("#logo", {
        opacity: 0,
        scale: 2,
        duration: 1.5,
        ease: Expo.easeInOut
    }, "-=0.8")

    .from("#mainHeading", {
        opacity: 0,
        duration: 0.1,
        onStart: function () {
            $('#mainHeading').textillate({
                in: {
                    effect: 'rollIn'
                }
            });
        }
    }, "-=1");


gsap.from("#appI", {
    opacity: 0,
    scale: 1.75,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: "#appI",
        scroller: "#mainCtn",
        start: "top 50%",
        end: "bottom 50%"
    }
});