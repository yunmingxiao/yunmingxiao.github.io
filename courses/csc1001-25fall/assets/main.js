document.querySelector('.menu-toggle').onclick = (e) => {
    document.querySelector('nav').classList.toggle('mobile');
    e.preventDefault();
};

const nav = document.querySelector("nav");
const aside = document.querySelector("aside");
const main = document.querySelector("main");
const sticky = nav.offsetTop;

const stickyToggle = () => {
    const hasMinHeight = () => {
        // only do sticky menu if page is tall enough to avoid weird blinking thing.
        var body = document.body,
            html = document.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        return (height - window.innerHeight) > 200;
    };
    if (!hasMinHeight()) {
        return;
    }
    if (window.pageYOffset > sticky) {
        nav.classList.add("sticky");
        main.classList.add("sticky");
        if (aside) {
            aside.classList.add("sticky");
        }
    } else {
        nav.classList.remove("sticky");
        main.classList.remove("sticky");
        if (aside) {
            aside.classList.remove("sticky");
        }
    }
};

window.onscroll = stickyToggle;