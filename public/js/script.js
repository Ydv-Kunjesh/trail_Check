
let width = window.innerWidth;

if(width>550){
    Shery.mouseFollower({
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        skew: true,
        duration: 0.5,
    });
    
    Shery.makeMagnet(".hero>.right>.text>a", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });
}

function textAnime(){
    Shery.textAnimate(".hero>.left>.bottom>h4", {
        style: 1,
        y: 1,
        delay: 0.05,
        duration: .2,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.5,
      });
}
let flag = true;


function menu(){
    let menu = document.getElementById("menu");
    let line = document.getElementById("line");
    let line1 = document.getElementById("line1");


    if(flag == true){
        menu.style.right = "-150%";
        line.style.stroke = "#fff";
        line1.style.stroke = "#fff";
        flag = false;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 1,
            duration: 1.5,
            stagger: .2,
            delay: .7,
            rotateX: 0,
            // x: 50,
            y: -20,
            // scale: 2,
            ease: "power2"
        })
    }
    else{
        menu.style.right = "-2500%";
        line.style.stroke = "#000";
        line1.style.stroke = "#000";
        flag = true;
        gsap.to("nav>.right>.menu a, nav>.right>.menu>button",{
            opacity: 0,
            duration: 1, 
            stagger: .2,
            rotateX: 100,
            // x: 50,
            y: 20,
            delay: .2,
            // scale: 2,
            ease: "power2"
        })
    }
}


let tl = gsap.timeline();

function heroAnimation(){
    tl.from("nav>.logo>img, nav>.right>.hamburger",{
        opacity: 0,
        duration: 2, 
        // y: -50,
        delay: .2,
        stagger: .3,
        scale: 0,
        ease: "expo.out"
    },"hero")
    // .from("nav>.right a, nav>.right>button",{
    //     opacity: 0,
    //     duration: 2, 
    //     stagger: .2,
    //     // x: 50,
    //     y: -50,
    //     delay: .2,
    //     // scale: 2,
    //     ease: "elastic.out(1, 0.8)"
    // },"hero")
    .from(".hero>video",{
        opacity: 0,
        duration: 2, 
        stagger: .2,
        // x: 50,
        y: -50,
        scale: 1.5,
        ease: "elastic.out(1, 0.6)",
        delay: 1.2
    },"hero")
    .from(".hero>.left>.top",{
        opacity: 0,
        duration: 1, 
        stagger: .2,
        delay: .8,
        // x: 50,
        y: 50,
    },"hero")
    .from(".hero>.left>.bottom>h4",{
        opacity: 0,
        onStart: ()=> textAnime(),
        duration: 1, 
        delay: 1.4
    },"hero")
    .from(".hero>.left>.bottom>h1",{
        opacity: 0,
        duration: 2, 
        stagger: .2,
        rotateX: 100,
        delay: 2,
        scale: .9,
        y: 15,
        ease: "elastic.out(1, 0.6)"
    },"hero")
    .from(".hero>.left>.bottom>a",{
        opacity: 0,
        delay: 1,
        duration: 1, 
        // x: 50,
        scale: 0.5,
        ease: "elastic.out(1, 0.8)",
        delay: 2.8
    },"hero")
    .from(".hero>.right>.text",{
        opacity: 0,
        duration: 2, 
        // x: 50,
        stagger: .3,
        y: -50,
        ease: "elastic.out(1, 0.8)",
        delay: 2.8
    },"hero")
}



gsap.from(".scroller ",{
    scrollTrigger: {
        scroller: ".main",
        trigger: ".scroller",
        start: "top 70%",
        end: "bottom bottom",
        // markers: true
    },

    opacity: 0,
    scale: 2,
    duration: 2,
    ease: "elastic.out(1, 1.2)"
})

